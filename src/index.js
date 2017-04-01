import firebase from 'firebase';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App, Main, Login, AddFamily,FamilyInfo, AddChild, ChildInfo } from './components';
import './index.css';


import configureStore from './store/configureStore';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

const store = configureStore();

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAHsz75eNzyRKVOriUl9eX6xiniuEXfHRo",
  authDomain: "saylani-app.firebaseapp.com",
  databaseURL: "https://saylani-app.firebaseio.com",
  storageBucket: "saylani-app.appspot.com",
  messagingSenderId: "1037270143104"
};
firebase.initializeApp(config);

injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/addFamily" component={AddFamily} />
          <Route path="/:familyId/addChild" component={AddChild}/>
          <Route path="/:familyId/:childId" component={ChildInfo}/>
          <Route path="/:familyId" component={FamilyInfo}/>
        </Route>

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
browserHistory.listen(location => {
  const state = store.getState();
  if(location.pathname !== "/" && state.loginData == null){
    browserHistory.replace('/');
  }
});