import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory, Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchChild, deleteChild} from '../../actions/child';
import {Loader} from '../';

const style = {
  width: 400,
  position: "relative",
  margin: 60,
  textAlign: 'center',
  display: 'inline-block',
};

class ChildInfo extends Component {
  
  componentDidMount(){
    this.props.searchChild(this.props.params.childId);
  }
  componentWillReceiveProps(newProps) {
    //if user is coming from the search screen but an error was occurred
    if (newProps.childSearchError.message) {
      browserHistory.push('/main');
    }
  }
  render() {
    const child = this.props.currentChild;
    // if child is null, replace the below variables' values with '' so TextField don't give us errors
    const childId = (child && child.id) || '';
    const childName = (child && child.name) || '';
    const familyId = (child && child.familyId) || '';
    const childDob = (child && child.dob) || '';
    const childGender = (child && child.gender) || '';
    const childMadarssa = (child && child.madarssa) || '';
    const childClass = (child && child.class) || '';


    return (
      <div className="App">
        <Paper style={style} zDepth={2} >
          <Loader visible={this.props.isSearchingChild}/>
          <div style={{visibility: this.props.isSearchingChild ? "hidden" : "visible"}}>

          <h2>Child Info</h2>
          <TextField
            type="number"
            disabled={true}
            value={familyId}
            floatingLabelText="Family ID"
          />
          <TextField
            hintText="Enter child ID"
            type="number"
            value={childId}
            floatingLabelText="Child ID"
          /><br />
          <TextField
            hintText="Enter child name"
            type="text"
            value={childName}
            floatingLabelText="Child Name"
          /><br />

          <TextField
            hintText="Enter gender"
            type="text"
            value={childGender}
            floatingLabelText="Gender"
          /><br /><br />
          <TextField
            hintText="Date of Birth"
            value={childDob}
            type="text"
          />
          <TextField
            hintText="Enter class"
            type="text"
            value={childClass}
            floatingLabelText="Class"
          /><br />
          <TextField
            hintText="Enter Madarssa"
            type="text"
            value={childMadarssa}
            floatingLabelText="Madarssa"
          /><br />
          <br />
          <Link to={"/"+familyId}>
            <RaisedButton
              label="View Family"
              style={{marginRight:"5px"}}
              secondary={false}
            />
          </Link>
          <RaisedButton
            label="Delete"
            labelPosition="before"
            onTouchTap={(e) => this.props.deleteChild(childId, familyId)}
            style={{marginBottom:"20px"}}
            secondary={true}
          />
          </div>
        </Paper>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    currentChild: state.currentChild,
    childSearchError: state.childSearchError,
    isSearchingChild: state.isSearchingChild
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({searchChild, deleteChild}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ChildInfo);