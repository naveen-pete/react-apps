import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { getPost, updatePost } from '../actions/posts';

class PostFormUpdate extends Component {
  get id() {
    return parseInt(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.getPost(this.id);
  }

  handleSubmit = post => {
    this.props.updatePost(post);
    this.props.history.push('/posts');
  }

  render() {
    const { posts } = this.props;
    const post = posts.find(p => p.id === this.id);

    return <PostForm
      operation="Update"
      post={post}
      onSubmit={this.handleSubmit}
    />;
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
  updatePost: post => dispatch(updatePost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFormUpdate);
