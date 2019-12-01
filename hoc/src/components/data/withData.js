import React, { Component } from 'react';

const withData = (WrappedComponent, resource, numberOfItems = 10) => {
  class WithData extends Component {
    apiUrl = 'https://jsonplaceholder.typicode.com';

    state = {
      data: []
    };

    componentDidMount() {
      fetch(`${this.apiUrl}/${resource}`)
        .then(response => response.json())
        .then(posts => this.setState({ data: posts.slice(0, numberOfItems) }))
        .catch(error => console.log('Error:', error.message));
    }

    render() {
      return (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }

  return WithData;
};

export default withData;
