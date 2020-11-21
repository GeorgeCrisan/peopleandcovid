import React from 'react';
import {useParams} from 'react-router-dom';
import AreYouLost from '../../Components/Views/AreYouLost';

const StoryDetail: React.FC = () => {
  
  const {id} = useParams<{id: string}>();
  console.log("what are params", id);

  if(!id) {
    return <AreYouLost />;
  }

  return (<div> Content {`${id}`} </div>);
};

export default StoryDetail;