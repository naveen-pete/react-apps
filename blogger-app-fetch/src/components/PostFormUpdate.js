import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      const post = await postService.get(id);
      this.setState({ post });
    } catch (e) {
      console.log('Get post failed.');
      console.log('Error:', e);
    }
  }

  handleSubmit = async post => {
    try {
      await postService.update(post);
      this.props.history.push('/posts');
    } catch (e) {
      console.log('Update post failed.');
      console.log('Error:', e);
    }
  }

  render() {
    return <PostForm
      categories={this.props.categories}
      operation="Update"
      post={this.state.post}
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormUpdate;
