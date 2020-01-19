import React, { Component } from 'react';

import PostForm from './PostForm';
import { posts } from '../data/store';

class PostFormCreate extends Component {
  handlePostCreate = (post) => {
    post.id = Date.now();
    posts.push(post);
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
