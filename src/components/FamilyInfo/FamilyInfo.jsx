import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import {Loader} from '../';
import { searchFamily, deleteFamily, addFamily, fetchChildrenList } from '../../actions/family';

const style = {
  position: "relative",
  width: 400,
  marginTop: 60,
  marginBottom: 60,
  paddingBottom:10,
  textAlign: 'center',
  display: 'inline-block',
};



class FamilyInfo extends Component {
  componentDidMount() {
    this.props.fetchChildrenList(this.props.params.familyId);
    this.props.searchFamily(this.props.params.familyId);
  }
  // uncommenting it doesn't give it the proper functionality that is needed
  // save() {
  //   const id = this.inputId.value;
  //   const father_name = this.inputFather.value;
  //   const mother_name = this.inputMother.value;
  //   const address = this.inputAddress.value;
  //   const contact = this.inputContact.value;
  //   const tel = this.inputTelephone.value || null;

  //   if (id && father_name && mother_name && address && contact) {
  //     const family = {
  //       id,
  //       father_name,
  //       mother_name,
  //       address,
  //       contact,
  //       tel
  //     };
  //     this.props.editFamily(family);
  //   }
  // }
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
      <div>
        {this.props.children ||
        
        <Paper style={style} zDepth={2} >
          <Loader visible={this.props.isSearchingFamily} />
          <div style={{visibility:this.props.isSearchingFamily ? "hidden" : "visible"}}>

          <h2>Family Info </h2>
          <TextField
            hintText="Enter family ID"
            type="number"
            value={familyId}
            floatingLabelText="Family ID"
          /><br />
          <TextField
            hintText="Enter father name"
            type="text"
            value={fatherName}
            ref={(el) => this.inputFather = el && el.input}
            floatingLabelText="Father Name"
          /><br />
          <TextField
            hintText="Enter mother name"
            type="text"
            value={motherName}
            ref={(el) => this.inputMother = el && el.input}
            floatingLabelText="Mother Name"
          /><br />
          <TextField
            hintText="Enter your address"
            type="text"
            value={address}
            ref={(el) => this.inputAddress = el && el.input}
            floatingLabelText="Address"
          /><br />
          <TextField
            hintText="Enter Contact No"
            type="number"
            value={contact}
            ref={(el) => this.inputContact = el && el.input}
            floatingLabelText="Contact No"
          /><br />
          <TextField
            hintText="Enter Telephone #"
            type="number"
            value={tel}
            ref={(el) => this.inputTel = el && el.input}
            floatingLabelText="Tel #"
          /><br />
          <br />
          {/*uncomment it when you've completed the editing functionality
          <RaisedButton
            label="Save"
            labelPosition="before"
            onTouchTap={(e) => this.save(familyId)}
            primary={true}
          />*/}
          <RaisedButton
            label="Delete"
            labelPosition="before"
            onTouchTap={(e) => this.deleteFamily(familyId)}
            secondary={true}
            style={{ marginRight: "5px" }}
          />
          <Link to={"/"+familyId+"/addChild"}>
            <RaisedButton
              label="Add Child"
              labelPosition="before"
            />
          </Link>
          <div style={{display:this.props.currentChildrenList.length === 0 ? "none": "block"}}>
            <hr/>
            <h2>Children</h2>
            <List style={{textAlign : "left"}}>
            {this.props.currentChildrenList.map((child) =>{
              const info = <div>id: {child.id}, class: {child.class}</div>;
              return (
                <Link key={child.id} to={"/" + child.familyId + "/" + child.id}>
                  <ListItem secondaryText={info} primaryText={child.name} />
                </Link>
              );
            })}
            </List>
          </div>
          </div>

        </Paper>
        }

      </div>
    );
  }
}
function mapStateToProps(state) {
  return {   
      currentFamily:state.currentFamily, 
      familySearchError:state.familySearchError, 
      isSearchingFamily: state.isSearchingFamily,
      currentChildrenList: state.currentChildrenList
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFamily, deleteFamily, editFamily: addFamily, fetchChildrenList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FamilyInfo);