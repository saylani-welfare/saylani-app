import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './App.css';


import TextField from 'material-ui/TextField';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';


class App extends Component {

  login(e){
    e.preventDefault();
    var email = this.refs.email.getValue();
    var pass = this.refs.pass.getValue();
    var demo = this.refs.demo;
    
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((result) => { 
      console.log("successful");
       browserHistory.push('/main');
   
  })
      
      .catch(function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;
      demo.innerHTML = errorMessage;
    });


  }
  
  render() {
    const style = {
  height: 340,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
    return (
      <div className="App">
        <br /><br /><br /><br />

         <Paper style={style} zDepth={2} >

           <h1>Admin Login</h1>
           
           <p ref="demo"> email: admin@saylani.com  pass: saylani123 <br /> </p>
            <TextField
                  hintText="Email"
                  floatingLabelText="Email" ref="email"
                /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"  ref="pass"
              type="password"
            /><br />

            <RaisedButton backgroundColor="#316dc3" label="Login" primary={true} style={{margin: 12}} onClick={this.login.bind(this)} />
         
         </Paper>
      
      </div>
    );
  }
}

export default App;
