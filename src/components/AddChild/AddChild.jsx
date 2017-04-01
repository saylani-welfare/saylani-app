import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addChild} from '../../actions/child';

const style = {
  paddingBottom: "20px",
  width: 400,
  margin: 60,
  textAlign: 'center',
  display: 'inline-block',
};

class AddChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
      gender: "male"
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  }
  add(e){
    e.preventDefault();
    const name = this.inputChildName.value;
    const id = this.inputChildId.value;
    const dob = this.state.controlledDate.toLocaleDateString();
    const className = this.inputClass.value;
    const madarssa = this.inputMadarssa.value;
    const gender = this.state.gender;
    const familyId = this.props.params.familyId;
    if(name && id && dob && className && madarssa){
      const child = {
        id, 
        familyId,
        name, 
        gender,
        dob,
        class: className,
        madarssa
      };
      this.props.addChild(child, true);
    }
  }
  handleGenderChange(e, value){
    this.setState({gender: value});
  }
  render() {
    
    return (
      <div>
        <Paper style={style} zDepth={2} >
          <h2>Add Children </h2>
          <form onSubmit={(e) => {this.add(e)}}>

          <TextField
            type="number"
            disabled={true}
            value={this.props.params.familyId}
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Family ID"
          />
          <TextField
            hintText="Enter child ID"
            type="number"
            ref={el => this.inputChildId = el && el.input}
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Child ID"
            required
          /><br />
          <TextField
            hintText="Enter child name"
            type="text"
            ref={el => this.inputChildName = el && el.input}
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Child Name"
            required
          /><br />
         <div style={{textAlign : "left", padding:"0px 70px"}}>   
        <RadioButtonGroup name="gender" onChange={(e, newS) => this.handleGenderChange(e, newS)} defaultSelected="male">
          <RadioButton label="Male" value="male" style={{paddingTop:"10px"}}/>
          <RadioButton label="Female" value="female" style={{paddingTop:"10px"}}/>
        </RadioButtonGroup>
          </div> 
        <br />
          <DatePicker
            hintText="Date of Birth"
            value={this.state.controlledDate}
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            onChange={this.handleChange}
            style={{'backgroundColor':"green"}}
            required
          />
          <TextField
            hintText="Enter class"
            type="text"
            ref={el => this.inputClass = el && el.input}
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Class"
            required
          /><br />
          <TextField
            hintText="Enter Madarssa"
            type="text"
            ref={el => this.inputMadarssa = el && el.input}
            floatingLabelText="Madarssa"
              floatingLabelFocusStyle={{ color: '#71a215' }}
              underlineFocusStyle={{ borderColor: '#71a215' }}
            required
          /><br />
          <br />
          <p style={{color:"red"}}>{this.props.childError && this.props.childError.message}</p>
          <RaisedButton
            label="Add"
            labelPosition="before"
            primary={false}
            type="submit"
          />
          </form>
        </Paper>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {childError : state.childError};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addChild},dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AddChild);