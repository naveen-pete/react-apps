import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCategoryName } from '../util';
import Categories from './Categories';
import { getPosts, deletePost } from '../actions/posts';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  handlePostDelete = id => {
    if (window.confirm('Are you sure?')) {
      this.props.deletePost(id);
    }
  }

  renderPosts(posts) {
    const { categories } = this.props;

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(p => <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.author}</td>
            <td>{getCategoryName(categories, p.category)}</td>
            <td>
              <div className="btn-group btn-group-sm">
                <Link className="btn btn-info" to={`/posts/${p.id}`} >View </Link>
                <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => this.handlePostDelete(p.id)}>Delete</button>
              </div>
            </td>
          </tr>)}
        </tbody>
      </table>
    );
  }

  render() {
    const { categories, selectedCategory, posts } = this.props;

    const filteredPosts = selectedCategory.id !== 'all'
      ? posts.filter(p => p.category === selectedCategory.id)
      : posts;

    return (
      <div className="row">
        <div className="col-3">
          <Categories data={categories} />
        </div>

        <div className="col">
          <h3>Posts</h3>
          <p>Selected Category: {selectedCategory.name}</p>

          {filteredPosts.length > 0
            ? this.renderPosts(filteredPosts)
            : <div className="alert alert-info">No posts for selected category.</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, categories, selectedCategory }) => ({
  posts,
  categories,
  selectedCategory
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
