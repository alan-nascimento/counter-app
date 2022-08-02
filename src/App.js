import React, { Component } from 'react';

import './App.css';

export default class App extends Component {
  state = {
    counter: 0,
    error: '',
  }

  handleIncrement = () => {
    if (this.state.error) {
      this.setState({ error: '' });
    }

    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    if (!this.state.counter) {
      return this.setState({ error: 'The counter can\'t go bellow zero!' });
    }
    
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { counter, error } = this.state;

    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {counter}
        </h1>
        <small data-test="error-message">{error}</small>
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
