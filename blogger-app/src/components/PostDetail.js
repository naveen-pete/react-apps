import React, { Component } from 'react';

import { getPost, deletePost } from '../api/posts';

class PostDetail extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const post = getPost(parseInt(id));
    this.setState({ post });
  }

  handleEditClick = () => {
    this.props.history.push(`/posts/${this.state.post.id}/edit`);
  }

  handleDeleteClick = (postId) => {
    deletePost(postId)
    this.props.history.push('/posts');
  }

  render() {
    const { post } = this.state;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="card bg-light mb-3">
        <div className="card-header">
          <h5>
            {post.title}
          </h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            {post.body}
          </p>
          <p className="card-text">Author: <em>
            {post.author}
          </em></p>
          <p className="card-text">Category: <em>
            {post.category}
          </em></p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-sm btn-outline-primary mr-1"
            type="button"
            onClick={this.handleEditClick}
          >Edit</button>
          <button
            className="btn btn-sm btn-outline-danger"
            type="button"
            onClick={() => this.handleDeleteClick(post.id)}
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default PostDetail;
