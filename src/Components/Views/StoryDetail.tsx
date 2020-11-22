import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AreYouLost from '../../Components/Views/AreYouLost';
import StoryCard from '../StoryCard';
import { db } from '../../firebaseinit';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from 'emotion';

const StoryDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const [story, setStory] = useState<any>(false);
  const [loading, setLoading] = useState<any>(true);

  useEffect(() => {

    fetchDoc(id);

  }, []);

  const fetchDoc = async (id: string) => {
    try {

      let story = await db.collection('stories').doc(id).get();
      console.log('what is story', story, story.data());
      setTimeout(() => {
        setLoading(false);
        setStory({id: story.id, data: story.data()});
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  if (loading) {

    return (
      <div className={storiesStyle}>

        <CircularProgress style={{ color: 'rgba(3, 168, 124, 1)' }} size={100} color='secondary' />
        <h3 style={{ color: '#555', marginLeft: 16, padding: 32, fontSize: 16, fontFamily: "'Fira Sans', sans-serif" }} > Loading... Fetching stories for you. </h3>
      </div>
    );
  }

  if (story) {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <StoryCard story={story} storyDetail={true} />
      </div>
    );
  }

  if (!id) {
    return <AreYouLost />;
  }

  return (<div> Content {`${id}`} </div>);
};


const storiesStyle = css`
  width: 100%;
  align-items: center;
  padding-top: 100px;
  flex-flow: column nowrap;
  display: flex;
  justify-content: center;
  min-heigh: 400px;
`;

export default StoryDetail;