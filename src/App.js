import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => this.setState({ counter: this.state.counter + 1 });

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button" 
          onClick={this.handleIncrement}
        >
          Increment
        </button>
      </div>
    );
  }
}
