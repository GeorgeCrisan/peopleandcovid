import React, {useState, useEffect  } from 'react';
import {db} from '../../firebaseinit';
import CircularProgress from '@material-ui/core/CircularProgress';
import {css} from 'emotion';

type PropsType = {
  children?: any;
};

type Story  = {
  id: string,
  data: object
};

function StoriesList(props: PropsType) {

  const [data, setData] = useState<Story[]>([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    db.collection('stories').get().then((data)=>{
      setLoading(false);
      if(!data.empty) {
        let dataSet: Story[] = []; 

        data.forEach((el)=>{
           dataSet.push({id: el.id, data: el.data() });
          });
          console.log(dataSet);
          setData(dataSet);
      }
      
    }).catch((e)=>{
      setLoading(false);
    })
  },[props])


  if(loading) {
    return (<div className={storiesStyle}>
      <CircularProgress style={{color: 'rgba(3, 168, 124, 1)'}} size={100} color='secondary' />
      <h3 style={{color: '#333', marginLeft: 16, padding: 32, fontSize: 16, fontFamily: "'Josefin Sans', sans-serif"}} > Loading... Fetching stories for you. </h3>
   </div>);
  }

  return (<div className={dataContainer}> Data {data.length} </div>);
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

const dataContainer = css`
   max-width: 800px;
   display: flex;
   margin: auto;
   padding: 16px;
`;