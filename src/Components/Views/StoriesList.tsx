import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseinit';
import { css, keyframes } from 'emotion';

//Components
import CircularProgress from '@material-ui/core/CircularProgress';
import StoryCard from '../StoryCard';
import { useInView } from 'react-intersection-observer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export type Story = {
  id: string,
  data: {
    title?: string,
    name?: string,
    storytext?: string,
    createdat?: { seconds: number, nanoseconds: number },
    gender?: 'male' | 'female' | 'other',
    status?: 'approved' | 'draft' | 'denied',
    city?: string,
    country?: string
  }
};

function StoriesList() {

  const [data, setData] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSnap, setCurrentSnap] = useState<any>(false);
  const [ref, inView, entry] = useInView({
    trackVisibility: true,
    delay: 100,
    rootMargin: '10px 0px',
  });

  console.log('entry', entry, inView);

  useEffect(() => {
    db.collection('stories')
      .orderBy('createdat', 'desc')
      .limit(10)
      .get().then((documentSnapshots) => {
        if (!documentSnapshots.empty) {
          let dataSet: Story[] = [];

          documentSnapshots.docs.forEach((el) => {
            dataSet.push({ id: el.id, data: el.data() });
          });

          setLoading(() => false);
          setData(() => dataSet);

          const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];

          const next = db.collection('stories')
            .startAfter(lastVisible)
            .orderBy('createdat', 'desc')
            .limit(10);

          setCurrentSnap(next);
        }

      }).catch((e: any) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, [])

  const paginate = () => {
    if (currentSnap) {
      currentSnap.get().then((documentSnapshots: any) => {

        if (!documentSnapshots.empty) {
          let dataSet: Story[] = [];

          const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
          console.log("last", lastVisible);

          const next = db.collection('stories')
            .startAfter(lastVisible)
            .orderBy('createdat', 'desc')
            .limit(10);

          setCurrentSnap(next);

          documentSnapshots.forEach((el: any) => {
            dataSet.push({ id: el.id, data: el.data() });
          });

          setLoading(() => false);
          setData(() => dataSet);
        }

      }).catch((e: any) => {
        setLoading(false);
      });
    };
  };

  if (loading) {
    return (<div className={storiesStyle}>
      
      <CircularProgress style={{ color: 'rgba(3, 168, 124, 1)' }} size={100} color='secondary' />
      <h3 style={{ color: '#555', marginLeft: 16, padding: 32, fontSize: 16, fontFamily: "'Fira Sans', sans-serif" }} > Loading... Fetching stories for you. </h3>
    </div>);
  } else {
    let stories = data.map((el, i) => <StoryCard story={el} key={i} />);
    if (stories.length > 0) {
      return (<div className={dataContainer} >
        {stories}
        <p className={loadMore} ref={ref} >
          {`Scroll down to load more ...`}
          <ExpandMoreIcon className={downIcon} /> </p>
        </div>)
    } else {
      return (<div className={dataContainer}> No Stories </div>);
    }
  }
}

export default StoriesList;

const storiesStyle = css`
  width: 100%;
  align-items: center;
  padding-top: 100px;
  flex-flow: column nowrap;
  display: flex;
  justify-content: center;
  min-heigh: 400px;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -7px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const downIcon = css`
  color: rgba(3, 168, 124, 1);
  margin-top: 16px;
  width: 40px !important;
  height: 40px !important;
  font-size: 60px;

  svg {
    width: 40px !important;
    height: 40px !important;
  }
  position: relative;
  top: 12px;
  animation: ${bounce} 1.5s linear infinite;
  left: 0;
  bottom: 0;
`;

const loadMore = css`
  color: rgba(3, 168, 124, 1);
  font-familiy: 'Fira Sans', sans-serif; 
  margin: 50px auto;
`;

const dataContainer = css`
   max-width: 800px;
   display: flex;
   flex-flow: column nowrap;
   margin: auto;
   padding: 16px;
`;