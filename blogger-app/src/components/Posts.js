import React from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';
import PostDetail from './PostDetail';
import PostForm from './PostForm';
import { posts, categoryAll } from '../data/store';

class Posts extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: posts,
      selectedCategory: categoryAll
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
  }

  handleCategorySelect(category) {
    this.setState({ selectedCategory: category });
  }

  handlePostCreate = newPost => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      };
    });
  }

  handlePostDelete(postId) {
    this.setState((prevState) => {
      const filteredPosts = prevState.posts.filter(p => p.id !== postId);
      return {
        posts: filteredPosts
      };
    });
  }

  renderPosts(filteredPosts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map(p => <tr key={p.id}>
          <td>{p.title}</td>
          <td>{p.author}</td>
          <td>{p.category}</td>
          <td>
            <div className="btn-group btn-group-sm">
              <Link className="btn btn-info" to={`/posts/${p.id}`}>View </Link>
              <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
              <a className="btn btn-danger" href="#">Delete</a>
            </div>
          </td>
        </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const { selectedCategory, posts } = this.state;

    let filteredPosts = [];
    if (selectedCategory.id !== 'all') {
      filteredPosts = posts.filter(p => p.category === selectedCategory.id);
    } else {
      filteredPosts = posts;
    }

    return <div className="row">
      <div className="col-3">
        <Categories
          onCategorySelect={this.handleCategorySelect} />
      </div>
      <div className="col">
        <h4>Posts</h4>
        {this.renderPosts(filteredPosts)}
      </div>
    </div>;
  }
}

export default Posts;
