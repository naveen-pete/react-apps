import React, { Component } from 'react';

import PostForm from './PostForm';
import { addPost } from '../api/posts';

class PostFormCreate extends Component {
  handlePostCreate = post => {
    addPost(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handlePostCreate}
    />;
  }
}

export default PostFormCreate;
