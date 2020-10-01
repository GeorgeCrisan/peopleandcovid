import React from 'react';
import {Switch, Route} from 'react-router-dom';
import IndexView from './Components/Views/IndexView';
import AboutView from './Components/Views/AboutView';
import AreYouLost from './Components/Views/AreYouLost';
import Header from './Components/Header';

function App() {
  return (
    <>
        <Header />
        <Switch>
           <Route exact path='/' component={IndexView} />
           <Route exact path='/about' component={AboutView} />
           <Route path='*' component={AreYouLost} />
        </Switch>
    </>
  );
}

export default App;
