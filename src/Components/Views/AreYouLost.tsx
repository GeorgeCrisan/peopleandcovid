import React from 'react';
import {Link} from 'react-router-dom';


function IndexPage() {
  return (
    <>
      <Link to="/"> See what people have to say </Link>
      <Link to="/about"> About people and covid </Link>
    </>
  );
}

export default IndexPage;
