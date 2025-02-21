import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  Decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  Reset = () => {
    this.setState((prevState) => ({
      count: 0,
    }));
  };
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>{this.state.count}</h1>
        <button style={{ margin: '10px' }} onClick={this.Increment}>
          Increment
        </button>
        <button style={{ margin: '10px' }} onClick={this.Decrement}>
          Decrement
        </button>
        <button style={{ margin: '10px' }} onClick={this.Reset}>
          Reset
        </button>
      </div>
    );
  }
}
export default ClassCounter;
