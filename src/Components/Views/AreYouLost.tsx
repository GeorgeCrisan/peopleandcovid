import React from 'react';
import {Link} from 'react-router-dom';
import ButtonCustom from '../ButtonCustom';
import {css, cx} from 'emotion';

function IndexPage() {
  return (
    <div className={wrapper}>
      <h1 style={{margin: '60px auto', padding: "64px 32px 0 32px", fontFamily: 'Josefin Sans, sans-serif'}} > Nothing here, you may want to select one of the options below. </h1>
      <div className={buttonsWrp}>
        <Link style={{textDecoration: 'none', marginBottom: 16, width: 320}} to="/">
          <ButtonCustom onClick={()=>{console.log('hi1');}} variant='outlined' size='large' color='blue' >
            See what people have to say    
          </ButtonCustom> 
        </Link>
        <Link style={{textDecoration: 'none', width: 320}} to="/about">
          <ButtonCustom onClick={()=>{console.log('hi2');}} variant='outlined' size='large' color='blue' > 
          About people and covid
          </ButtonCustom>
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;


const wrapper = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  color: teal;
  margin: auto;
`;

const buttonsWrp = css`
  display: flex;
  padding: 32px;
  flex-flow: column;
  justify-content: center;
  font-familiy: "Fira Sans", sans-serif;
 
  @media (min-width: 520px) {
    flex-flow: row nowrap;
    width: 50%;
    margin: auto;
    justify-content: space-between;
  } 
`;