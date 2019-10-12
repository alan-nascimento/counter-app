import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  state = {
    counter: 0,
  }

  handleIncrement = () => this.setState({ counter: this.state.counter + 1 });

  handleDecrement = () => !!this.state.counter && this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <div>
          <button 
            data-test="increment-button" 
            onClick={this.handleIncrement}
          >
            Increment
          </button>
          <button
            data-test="decrement-button"
            onClick={this.handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
