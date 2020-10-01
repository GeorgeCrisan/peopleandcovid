import React from 'react';
import {Switch, Route} from 'react-router-dom';
import IndexView from './Components/Views/IndexView';
import AboutView from './Components/Views/AboutView';

function App() {
  return (
    <>
        <Switch>
           <Route exact path='/' component={IndexView} />
           <Route exact path='/about' component={AboutView} />
        </Switch>
    </>
  );
}

export default App;
