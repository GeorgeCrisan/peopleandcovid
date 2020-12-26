import React from 'react';
import { css } from 'emotion';
import { grey } from '@material-ui/core/colors';

const Footer: React.FC = () => {


  return (<div className={footerAll} >
    <div className={footerContainer}>
      <div>
        <h4 style={{ fontFamily: "'Fira Sans', sans-serif", color: 'rgba(3, 168, 124, 1)' }} >Useful Links</h4>
        <ul className={listStyle}>
          <a href='https://www.who.int/' ><li> World Health Organization </li></a>
          <a href='https://www.gov.uk/coronavirus' ><li> UK GOV Coronavirus </li></a>
          <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines'><li> Covid-19 Vaccines </li></a>
          <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'><li> Advice for the public </li></a>
        </ul>

      </div>
      <div>
        <h4 style={{ fontFamily: "'Fira Sans', sans-serif", color: 'rgba(3, 168, 124, 1)' }} > Reports and Statistics </h4>
        <ul className={listStyle}>
          <a href='https://www.who.int/data/gho' ><li> Global Health Observatory </li></a>
          <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports' > <li> Reports </li>  </a>
          <a href="https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases"> <li> ECDC Europe </li></a>
          <a href="https://coronavirus.data.gov.uk/"> <li> UK Daily Update </li></a>
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
  padding: 16px;
  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    border-bottom: 1px solid white;
    margin-top: 16px;
    max-width: 90%;
    &: hover {
      text-align: center;
      font-weight: bold;
    }
  }

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