import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { createPost } from '../actions/posts';

class PostFormCreate extends Component {
  handleSubmit = async post => {
    delete post.id;
    await this.props.createPost(post);
    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
})

export default connect(null, mapDispatchToProps)(PostFormCreate);
