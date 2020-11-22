import React from 'react';
import {Switch, Route} from 'react-router-dom';
import IndexView from './Components/Views/IndexView';
import AboutView from './Components/Views/AboutView';
import AreYouLost from './Components/Views/AreYouLost';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ShareYourStory from './Components/Forms/ShareYourStory';
import StoryDetail from './Components/Views/StoryDetail';

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
        <Footer />
    </>
  );
}

export default App;
