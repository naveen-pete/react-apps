import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategoryName } from '../util';
import { deletePost, getPost } from '../actions/posts';

class PostDetail extends Component {
  get id() {
    return parseInt(this.props.match.params.id);
  }

  async componentDidMount() {
    this.props.getPost(this.id);
  }

  handleDeleteClick = async () => {
    if (window.confirm('Are you sure?')) {
      await this.props.deletePost(this.id);
      this.props.history.push('/posts');
    }
  }

  render() {
    const { categories, posts } = this.props;
    const post = posts.find(p => p.id === this.id);

    if (!post) {
      return <div>Loading post. Please wait...</div>;
    }

    return <div className="card bg-light mb-3">
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
          {getCategoryName(categories, post.category)}
        </em></p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-sm btn-outline-primary mr-1"
          type="button"
          onClick={() => this.props.history.push(`/posts/${post.id}/edit`)}
        >Edit</button>
        <button
          className="btn btn-sm btn-outline-danger mr-1"
          type="button"
          onClick={this.handleDeleteClick}
        >Delete</button>
        <button
          className="btn btn-sm btn-outline-info"
          type="button"
          onClick={() => this.props.history.goBack()}
        >Back</button>
      </div>
    </div>;
  }
}

const mapStateToProps = ({ posts, categories }) => ({ posts, categories });

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
