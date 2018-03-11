import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <h1 className="App-title">CRM</h1>
      </div>
    );
  }
}

export default App;
