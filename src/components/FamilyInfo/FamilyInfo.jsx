import React, { Component } from 'react';
// import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { searchFamily, deleteFamily } from '../../actions/family';

const style = {
  height: 600,
  width: 400,
  marginTop: 60,
  textAlign: 'center',
  display: 'inline-block',
};



class FamilyInfo extends Component {
  componentDidMount() {
    this.props.searchFamily(this.props.params.familyId);
  }
  save() {
    const id = this.inputId.value;
    const father_name = this.inputFather.value;
    const mother_name = this.inputMother.value;
    const address = this.inputAddress.value;
    const contact = this.inputContact.value;
    const tel = this.inputTelephone.value || null;

    if (id && father_name && mother_name && address && contact) {
      const family = {
        id,
        father_name,
        mother_name,
        address,
        contact,
        tel
      };
      this.props.editFamily(family);
    }
  }
  deleteFamily(id) {
    if (id) {
      this.props.deleteFamily(id);
    }
  }
  componentWillReceiveProps(newProps) {
    if (newProps.familySearchError.message) {
      browserHistory.push('/main');
    }
  }
  render() {
    const family = this.props.currentFamily;
    const familyId = (family && family.id) || "";
    const fatherName = (family && family.father_name) || "";
    const motherName = (family && family.mother_name) || "";
    const address = (family && family.address) || "";
    const contact = (family && family.contact) || "";
    const tel = (family && family.tel) || "";
    return (
      <Paper style={style} zDepth={2} >
        <h2>Family Info </h2>
        <TextField
          hintText="Enter family ID"
          type="number"
          value={familyId}
          disabled={true}
          floatingLabelText="Family ID"
        /><br />
        <TextField
          hintText="Enter father name"
          type="text"
          disabled={true}
          value={fatherName}
          ref={(el) => this.inputFather = el && el.input}
          floatingLabelText="Father Name"
        /><br />
        <TextField
          hintText="Enter mother name"
          type="text"
          disabled={true}
          value={motherName}
          ref={(el) => this.inputMother = el && el.input}
          floatingLabelText="Mother Name"
        /><br />
        <TextField
          hintText="Enter your address"
          type="text"
          disabled={true}
          value={address}
          ref={(el) => this.inputAddress = el && el.input}
          floatingLabelText="Address"
        /><br />
        <TextField
          hintText="Enter Contact No"
          type="number"
          disabled={true}
          value={contact}
          ref={(el) => this.inputContact = el && el.input}
          floatingLabelText="Contact No"
        /><br />
        <TextField
          hintText="Enter Telephone #"
          type="number"
          value={tel}
          disabled={true}
          ref={(el) => this.inputTel = el && el.input}
          floatingLabelText="Tel #"
        /><br />
        <br />
        <RaisedButton
          label="Save"
          labelPosition="before"
          onTouchTap={(e) => this.edit(familyId)}
          primary={true}
        />
        <RaisedButton
          label="Delete"
          labelPosition="before"
          onTouchTap={(e) => this.deleteFamily(familyId)}
          primary={false}
          style={{ "backgroundColor": "red" }}
        />
        <Link to="/addChild">
          <RaisedButton
            label="Add Child"
            labelPosition="before"
            style={{ "backgroundColor": "red" }}
          />
        </Link>

      </Paper>
    );
  }
}
function mapStateToProps({ currentFamily, familySearchError }) {
  return { currentFamily, familySearchError };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFamily, deleteFamily }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FamilyInfo);