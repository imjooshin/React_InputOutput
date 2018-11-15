import React, { Component } from 'react';
import './App.css';
import Output from './Output'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <Output />
      </div>
    );
  }
}

export default App;
