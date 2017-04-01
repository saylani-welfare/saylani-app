import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginData, isLoggedIn} from '../../actions/auth';
import {browserHistory} from 'react-router';
import {Header} from '../';
import firebase from 'firebase';



class App extends Component {

  componentDidMount(){

    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
          // User is signed in.
          this.props.setLoginData(user);
          this.props.isLoggedIn(true);
          if(window.location.pathname === "/"){
            browserHistory.replace('/main');
          }
      } else {
          // User is signed out.
          this.props.setLoginData(null);
          this.props.isLoggedIn(false);
          browserHistory.replace('/');
      }
      console.log("is logged in: ", this.props.loginStatus);
    });
  }
  render() {

    return (
      <div className="App">
        <Header />
        
        {this.props.children}
         
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({setLoginData: loginData, isLoggedIn}, dispatch);
}
function mapStateToProps({isLoggedIn}){
  return {loginStatus: isLoggedIn};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
