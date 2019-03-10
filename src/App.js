import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DestinationsContainer from './containers/DestinationsContainer.js';
import './App.css';
import { theme } from './themes/materialStyling.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <NavContainer />
        <DestinationsContainer locations={this.state.destinations} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
