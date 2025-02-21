import React, { Component } from 'react';

class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
export default Refs;
