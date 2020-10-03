import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

type PropsType = {

};

function StoriesList(props: PropsType) {


  return (<div>
     List 
     <CircularProgress size={40} color='secondary' />
  </div>);
} 

export default StoriesList;