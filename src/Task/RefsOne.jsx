import React, { Component } from 'react';

class RefsOne extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  Clicker = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.Clicker}>Submit</button>
      </div>
    );
  }
}
export default RefsOne;
