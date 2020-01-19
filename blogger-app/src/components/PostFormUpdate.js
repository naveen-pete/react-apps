import React, { Component } from 'react';

import PostForm from './PostForm';
import { posts } from '../data/store';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const post = posts.find(p => p.id === parseInt(id));

    this.setState({ post });
  }

  handlePostUpdate = (post) => {
    const postToUpdate = posts.find(p => post.id);
    postToUpdate.title = post.title;
    postToUpdate.body = post.body;
    postToUpdate.author = post.author;
    postToUpdate.category = post.category;

    this.props.history.push('/posts');
  }

  render() {
    return <PostForm
      operation="Update"
      onSubmit={this.handlePostUpdate}
      post={this.state.post}
    />;
  }
}

export default PostFormUpdate;
