import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexView from './Components/Views/IndexView';
import AboutView from './Components/Views/AboutView';
import AreYouLost from './Components/Views/AreYouLost';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShareYourStory from './Components/Forms/ShareYourStory';
import StoryDetail from './Components/Views/StoryDetail';
import CookieConsent from 'react-cookie-consent';
import { css } from 'emotion';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={IndexView} />
        <Route exact path='/about' component={AboutView} />
        <Route exact path='/createstory' component={ShareYourStory} />
        <Route exact path='/story/:id' component={StoryDetail} />
        <Route path='*' component={AreYouLost} />
      </Switch>
      <div className={cookieStyle}>
        <CookieConsent
          location="bottom"
          buttonText="Ok"
          cookieName="consent"
          style={{ background: "#2B373B", fontFamiliy: "'Fira Sans', sans-serif;" }}
          buttonStyle={{ cursor: 'pointer', borderRadius: 5, fontFamily: 'Fira Sans, sans-serif', background: "rgba(3, 168, 124, 1)", color: 'white', fontSize: "16px" }}
          expires={150}
        >
          <p style={{ fontFamily: 'Fira Sans, sans-serif' }}>
            This website uses only necessary cookies. No personal or marketing information are stored in cookies.{" "}
          </p>
        </CookieConsent>
      </div>
      <Footer />
    </>
  );
}

const cookieStyle = css`
  button {
    @media only screen and (max-width: 600px) {
      width: 50px;
      position: relative;
      top: 16px;
    }
    width: 200px;
    height: 60px;

  }  

`;

export default App;
