import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './containers/Dashboard/Dashboard'
import Navbar from './components/Navigation/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
