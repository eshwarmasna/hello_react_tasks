import React, { Component } from 'react';

class FetchApi extends Component {
  state = {
    store: [],
    isLoggin: false,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => this.setState({ store: response }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Displaying the Items</h2>
        {this.state.store.map((prod, items) => (
          <li key={items}>
            {prod.title}
            <h1>{prod.description}</h1>
          </li>
        ))}
      </div>
    );
  }
}

export default FetchApi;
