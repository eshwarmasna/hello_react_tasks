import React, { Component } from 'react';

class Hello1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: 'Game Changer',
    };
  }
  handler = () => {
    this.setState({
      quote: 'Naanaa Hyranna',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.quote}</h1>
        <button onClick={this.handler}>Change</button>
      </div>
    );
  }
}
export default Hello1;
