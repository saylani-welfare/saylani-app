import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addFamily} from '../../actions/family';

const style = {
  height: 600,
  width: 400,
  marginTop: 60,
  textAlign: 'center',
  display: 'inline-block',
};



class AddFamily extends Component{
  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e){
    const id = this.inputId.value;
    const father_name = this.inputFather.value;
    const mother_name = this.inputMother.value;
    const address = this.inputAddress.value;
    const contact = this.inputContact.value;
    const tel = this.inputTelephone.value || null;

    
    
    const family = {
      id,
      father_name,
      mother_name,
      address,
      contact,
      tel 
    }; 
    this.props.addFamily(family);
  }
    render(){
        return (
            <Paper style={style} zDepth={2} >
          <h2>Add Family </h2>
          <TextField 
            hintText="Enter family ID"
            type="number"
            ref={(el) => this.inputId = el.input}
            floatingLabelText="Family ID"
            required
          /><br />
          <TextField
            hintText="Enter father name"
            type="text"
            ref={(el) => this.inputFather = el.input}
            floatingLabelText="Father Name"
            required
          /><br />
          <TextField
            hintText="Enter mother name"
            type="text"
            ref={(el) => this.inputMother = el.input}
            floatingLabelText="Mother Name"
            required
          /><br />
          <TextField
            hintText="Enter your address"
            type="text"
            ref={(el) => this.inputAddress = el.input}
            floatingLabelText="Address"
            required
          /><br />
          <TextField
            hintText="Enter Contact No"
            type="number"
            ref={(el) => this.inputContact = el.input}
            floatingLabelText="Contact No"
            required
          /><br />
          <TextField
            hintText="Enter Telephone #"
            type="number"
            ref={(el) => this.inputTelephone = el.input}
            floatingLabelText="Tel #"
          /><br />
          <br />
          <RaisedButton
            label="Save"
            labelPosition="before"
            primary={true}
            onTouchTap={(e)=>this.submit(e)}
          />

        </Paper>
        );
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addFamily}, dispatch);
}
export default connect(null, mapDispatchToProps)(AddFamily);