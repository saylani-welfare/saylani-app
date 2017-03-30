import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchFamily} from '../../actions/family';

class Main extends Component {

  searchF(){
    const familyId = this.refs.familyId.getValue();
    
    if(familyId){
      this.props.searchFamily(familyId);
    } 
  }
  render() {

    const style = {
      width: 400,
      margin: 20,
      padding: 10,
      textAlign: 'center',
      display: 'inline-block',
    };
    
    return (
    
      <div className="App">

        <h1>Home</h1>
    
    <Paper style={style} zDepth={1} >
        <TextField
          hintText="Family No."
          type="number"
          label="Family No."
          ref="familyId"
          floatingLabelText="Search Family"
        />

        <RaisedButton label="Search" primary={true} onClick={this.searchF.bind(this)} style={{ margin: 12 }} />
        <p style={{color: "red", margin: "0"}}>{this.props.familySearchError.message}</p>

        <br />
        <TextField
          hintText="Child No."
          type="number"
          floatingLabelText="Search Child" ref="number"
        />
        
        <RaisedButton label="Search" primary={true} style={{ margin: 12 }} />
        <br /><br />
        
        <Link to="/addFamily">
          <RaisedButton label="Add Family" primary={true} />
        </Link>
        

          </Paper>
        {/*<DropDownMenu maxHeight={100} value="Family">
             <MenuItem value="Family" key="1" primaryText="Family" />
             <MenuItem value="Child" key="2" primaryText="Child" />
        </DropDownMenu>*/}
      
      </div>
    );
  }
}
function mapStateToProps({familySearchError}){
  return {familySearchError};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({searchFamily}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
