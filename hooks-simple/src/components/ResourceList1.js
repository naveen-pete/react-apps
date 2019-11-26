import React from 'react';
import axios from 'axios';

class ResourceList1 extends React.Component {
  state = {
    resources: []
  };

  async getResources(resource) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    this.setState({ resources: response.data });
  }

  componentDidMount() {
    this.getResources(this.props.resource);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      this.getResources(this.props.resource);
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList1;
