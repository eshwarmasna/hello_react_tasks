import React, { Component } from 'react';

class ExampleClassComponent extends Component {
  state = {
    name: 'John',
    age: 25,
  };

  updateName = () => {
    this.setState({ name: 'Jain', age: 12 });
  };

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={this.updateName}>Update Name</button>
      </div>
    );
  }
}

export default ExampleClassComponent;
