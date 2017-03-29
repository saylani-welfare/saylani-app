import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

const style = {
  height: 600,
  width: 400,
  margin: 60,
  textAlign: 'center',
  display: 'inline-block',
};

class AddChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  }
  render() {

    return (
      <div className="App">
        <AppBar
          title="Saylani App"
          iconStyleLeft={{ "display": "none" }}
        /> 
        <Paper style={style} zDepth={2} >
          <h2>Add Children </h2>
          <TextField
            hintText="Enter child ID"
            type="number"
            floatingLabelText="Child ID"
          /><br />
          <TextField
            hintText="Enter child name"
            type="text"
            floatingLabelText="Child Name"
          /><br />
          <TextField
            hintText="Enter gender"
            type="text"
            floatingLabelText="Gender"
          /><br /><br />
          <DatePicker
            hintText="Date of Birth"
            value={this.state.controlledDate}
            onChange={this.handleChange}
          />
          <TextField
            hintText="Enter class"
            type="text"
            floatingLabelText="Class"
          /><br />
          <TextField
            hintText="Enter Madarssa"
            type="text"
            floatingLabelText="Madarssa"
          /><br />
          <br />
          <RaisedButton
            label="Save"
            labelPosition="before"
            primary={true}
          />
        </Paper>
      </div>
    );
  }
}

export default AddChildren;