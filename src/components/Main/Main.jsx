import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchFamily } from '../../actions/family';
import { searchChild } from '../../actions/child';

class Main extends Component {

  searchF() {
    const familyId = this.familyId.value;

    if (familyId) {
      this.props.searchFamily(familyId);
    }
  }
  searchC() {
    const childId = this.childId.value;

    if (childId) {
      this.props.searchChild(childId);
    }
  }
  render() {

    const style = {
      width: 400,
      margin: 20,
      padding: 10,
      textAlign: 'center',
      display: 'inline-block',
      button: {
        color: '#ffffff',
      },
    };


    return (

      <div className="App">

        

        <Paper style={style} zDepth={1} >
        <h1>Home</h1>
          <TextField
            hintText="Family ID, e.g: 79879"
            type="number"
            label="Family ID"
            ref={el => this.familyId = el && el.input}
            floatingLabelFocusStyle={{ color: '#71a215' }}
            underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Search Family"
            />

          <RaisedButton
            label="Search"
            primary={false}
            onTouchTap={this.searchF.bind(this)}

            labelColor="#ffffff"
            backgroundColor="#71a215"
            style={{ margin: 12 }} />

          <p style={{ color: "red", margin: "0" }}>{this.props.familySearchError.message}</p>

          <TextField
            hintText="Child ID, e.g: 001, 002"
            type="number"
            label="Child ID"
            ref={el => this.childId = el && el.input}
            floatingLabelFocusStyle={{ color: '#71a215' }}
            underlineFocusStyle={{ borderColor: '#71a215' }}
            floatingLabelText="Search Child"
            />

          <RaisedButton
            label="Search"
            primary={false}
            style={{ margin: 12 }}
            onTouchTap={this.searchC.bind(this)}

            labelColor="#ffffff"
            backgroundColor="#71a215"
            />
          <br />
          <p style={{ color: "red", marginTop: "0" }}>{this.props.childSearchError.message}</p>
          <Link to="/addFamily">
            <RaisedButton
              label="Add Family"
              primary={false}
              labelColor="#ffffff"
              backgroundColor="#71a215"
              />

          </Link>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({familySearchError, childSearchError}) {
  return { familySearchError, childSearchError };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchFamily, searchChild }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
