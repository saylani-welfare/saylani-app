import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App, AppBarExampleIcon, Main, Addfamily, AddChild } from './components';
import './index.css';


import configureStore from './store/configureStore';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';


const store = configureStore();

injectTapEventPlugin();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHsz75eNzyRKVOriUl9eX6xiniuEXfHRo",
  authDomain: "saylani-app.firebaseapp.com",
  databaseURL: "https://saylani-app.firebaseio.com",
  storageBucket: "saylani-app.appspot.com",
  messagingSenderId: "1037270143104"
};

firebase.initializeApp(config);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={AppBarExampleIcon} >
          <IndexRoute component={App} />
          <Route path="/main" component={Main} />
          <Route path="/addfamily" component={ Addfamily } />
        <Route path="/addchild" component={ AddChild } />
        </Route>

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
