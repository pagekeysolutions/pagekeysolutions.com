import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class ChoiceArea extends Component {
  render() {
    return (
      <div className="ChoiceArea">
        <p className="title">
          Choose a path
        </p>
        <div className="choice choice-left">
          <label>Manage my site</label>
          <button>&lt;---</button>
        </div>
        <div className="choice choice-right">
          <label>Create something new</label>
          <button>---&gt;</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="title">PageKey Solutions</h1>
        </header>
        <div className="main-content">
          <ChoiceArea />
        </div>
      </div>
    );
  }
}

export default App;
