import React, { Component } from 'react';
import { Link } from 'react-router';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

const style = {
  height: 600,
  width: 400,
  marginTop: 60,
  textAlign: 'center',
  display: 'inline-block',
};



class FamilyInfo extends Component{
    
    render(){
        console.log(this.props.currentFamily);
        return (
            <Paper style={style} zDepth={2} >
          <h2>Family Info </h2>
          <h3>ID: {}</h3>
          <TextField 
            hintText="Enter family ID"
            type="number"
            floatingLabelText="Family ID"
          /><br />
          <TextField
            hintText="Enter father name"
            type="text"
            floatingLabelText="Father Name"
          /><br />
          <TextField
            hintText="Enter mother name"
            type="text"
            floatingLabelText="Mother Name"
          /><br />
          <TextField
            hintText="Enter your address"
            type="text"
            floatingLabelText="Address"
          /><br />
          <TextField
            hintText="Enter Contact No"
            type="number"
            floatingLabelText="Contact No"
          /><br />
          <TextField
            hintText="Enter Telephone #"
            type="number"
            floatingLabelText="Tel #"
          /><br />
          <br />
          <Link to="/">
          <RaisedButton
            label="Save"
            labelPosition="before"
            primary={true}
            style={{'marginRight': 5}}
          />
          
          </Link>
          <RaisedButton
            label="Delete"
            labelPosition="before"
            primary={false}
          />

        </Paper>
        );
    }
}
function mapStateToProps({currentFamily}){
    return {currentFamily};
}
export default connect()(FamilyInfo);