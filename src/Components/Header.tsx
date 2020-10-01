import React from 'react';
import { cx, css } from 'emotion';
import {Link} from 'react-router-dom';
import bannerImage from '../images/header-pr.jpg';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import Button from '@material-ui/core/Button';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Header.css';


function Header() {
  return(
    <div className={cx(headerStyle)}>
        <div className={menu}>
          <Link to='/'>
            <ImportContactsOutlinedIcon style={ {fontSize: 30, position: "relative", top: 6}} /> Stories
          </Link>
          <Link to='/about'>
             About<EmojiPeopleOutlinedIcon style={ {fontSize: 34, position: "relative", top: 4}} /> 
          </Link>
        </div>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        interval={6000}
        isIntrinsicHeight={true}
        infinite={true}
        className={css`position: relative; z-index: 5; height: 260px;`}
      >
        <Slider classNameAnimation={'temp'}  >
          <Slide classNameHidden="i-be-hidden" classNameVisible="i-be-visible" index={0}><div className={slides} >Share your story. You do not have to register.</div></Slide>
          <Slide classNameHidden="i-be-hidden" classNameVisible="i-be-visible"  index={1}><div className={slides}> This is about the people from the people. </div></Slide>
          <Slide classNameHidden="i-be-hidden" classNameVisible="i-be-visible"  index={2}><div className={slides}> Every story is moderated before being approved. </div></Slide>
        </Slider>
      </CarouselProvider>
      <div className={shareStoryButton}>
          <div className={css`background-color: rgba(0,0,0, 0.5); padding: 12px; `}>
              <Button variant="outlined" size="large" color="secondary"> Share your story</Button>
          </div>
        </div>
    </div>
  );
}

export default Header;

const headerStyle = css`
    height: 380px;
    background-color: rgba(242, 242, 242, 1);
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;
    &:after {
      display: block;
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,30,30,0.5);
    }
    
`;

const menu = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 80px;
  padding: 16px;
  colour: white;
  position: relative;
  z-index: 5;
  a {
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 16px;
    heigh: 26px;
    color: white;
    font-family: 'Fira Sans', sans-serif; 
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    &:hover {
      font-size: 18px;
    }
  }
`;

const slides = css`
  width: 100%;
  max-height: 300px;
  margin: auto;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 40px;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: center;
  padding-top: 20px;
  justify-content: center;
  align-items: space-around;
  z-index: 5;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  @media (min-width: 520px) {
    padding-top: 60px;
  }
`;

const shareStoryButton = css`
  position: relative;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-flow: row;
  top: -60px;
`;

const stylesButton = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};