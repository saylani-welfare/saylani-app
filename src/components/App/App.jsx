import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          title="Saylani App"
          iconStyleLeft={{"display":"none"}}
        />
      </div>
    );
  }
}

export default App;
