import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import './App.css';
import './themes/materialStyling.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavContainer />
      </div>
    );
  }
}

export default App;
