import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';
// import FlatButton from 'material-ui/FlatButton';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
// import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// import firebase from 'firebase';
import {browserHistory} from 'react-router';


class Main extends Component {



  addFamily(e){
    e.preventDefault();
    browserHistory.push('/addfamily');
  }

    addChild(e){
    e.preventDefault();
    browserHistory.push('/addchild');
  }



  render() {

    const style = {
  height: 270,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


    return (
    
      <div className="App">

        <h1>Home</h1>
    
    <Paper style={style} zDepth={1} >
        <TextField
          hintText="Family No."
          floatingLabelText="Search Family" ref="number"  type="number"
        />

        <RaisedButton label="Search" primary={true} style={{ margin: 12 }} />
        
        <br />
        
        <TextField
          hintText="Child No."
          floatingLabelText="Search Child" ref="number" type="number"
        />
        
        <RaisedButton label="Search" primary={true} style={{ margin: 12 }} />
        <br /><br />
        
        <RaisedButton label="Add Family" primary={true} style={{ margin: 12 }} onClick={this.addFamily.bind(this)} />
        
        <RaisedButton label="Add Child" primary={true} style={{ margin: 12 }}  onClick={this.addChild.bind(this)}  />
        

          </Paper>
        {/*<DropDownMenu maxHeight={100} value="Family">
             <MenuItem value="Family" key="1" primaryText="Family" />
             <MenuItem value="Child" key="2" primaryText="Child" />
        </DropDownMenu>*/}
      
      </div>
    );
  }
}

export default Main;
