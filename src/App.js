import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Navbar } from './components/Navbar';
import Chart from './components/chart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <List/>
        <Chart/>
      </div>
    );
  }
}

export default App;
