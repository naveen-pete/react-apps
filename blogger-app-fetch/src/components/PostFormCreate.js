import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormCreate extends Component {
  handleSubmit = async post => {
    try {
      delete post.id;
      await postService.create(post);
      this.props.history.push('/posts');
    } catch (e) {
      console.log('Create post failed.');
      console.log('Error:', e);
    }
  }

  render() {
    return <PostForm
      categories={this.props.categories}
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;