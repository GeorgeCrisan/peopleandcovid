import React from 'react';
import {css} from 'emotion';
import { grey } from '@material-ui/core/colors';

const Footer:React.FC = () => {


  return (<div className={footerAll} >
      <div className={footerContainer}>
        <div>
          <h4 style={{fontFamily: "'Fira Sans', sans-serif"}} >Useful links</h4>
          <ul className={listStyle}>
             <li> Items </li>
           </ul>

        </div>
        <div>
           <h4 style={{fontFamily: "'Fira Sans', sans-serif"}} > More info more links </h4>
           <ul className={listStyle}>
             <li> Items </li>
           </ul>
        </div>
      </div>
    </div>);

};


const footerAll = css`
  height: 300px;
  background: #172244;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  div div {
    color: white;
    ul li {
      color: white;
      font-familiy: "Fira Sans", sans-serif;
    } 
  }
`;

const footerContainer = css`
  margin-top: 16px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  div {
    width: 100%;
  }
`;

const listStyle = css`

  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  li {
    margin-left: 0;
    font-family: 'Fira Sans', sans-serif;
    color: white;
  }
`;

export default Footer;