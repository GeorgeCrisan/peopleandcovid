import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import reduxStore from "./smsetup/reduxStore";

const storeInst = reduxStore({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInst}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('initpeopleandcovid')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
