import React, { Component } from 'react';

class StateTs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'Hello Eshwar, Your FullName Please!',
    };
  }
  Clicker = () => {
    this.setState({
      state: 'My FullName is Masna Eshwar',
    });
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{this.state.state} </h1>
        <br />
        <button onClick={this.Clicker}>Click</button>
      </div>
    );
  }
}
export default StateTs;
