import React, { Component } from 'react';

import PostForm from './PostForm';
import { getPost, updatePost } from '../api/posts';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const post = getPost(parseInt(id));

    this.setState({ post });
  }

  handlePostUpdate = (post) => {
    updatePost(post);

    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Update"
      post={this.state.post}
      onSubmit={this.handlePostUpdate}
    />;
  }
}

export default PostFormUpdate;
