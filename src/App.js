import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Hello World!</h1>
        <button>Increment</button>
      </div>
    );
  }
}
