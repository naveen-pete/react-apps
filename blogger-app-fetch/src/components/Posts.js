import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Categories from './Categories';

import { categoryAll } from '../constants';
import postService from '../services/PostService';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: [],
      selectedCategory: categoryAll
    };
  }

  async componentDidMount() {
    try {
      const posts = await postService.getAll();
      this.setState({ posts });
    } catch (error) {
      console.log('Get posts failed.');
      console.log('Error:', error);
    }
  }

  handlePostDelete = async (id) => {
    try {
      if (window.confirm('Are you sure?')) {
        await postService.delete(id);

        this.setState((prevState) => {
          const updatedPosts = prevState.posts.filter(p => p.id !== id);
          return {
            posts: updatedPosts
          };
        });
      }
    } catch (error) {
      console.log('Delete post failed.');
      console.log('Error:', error);
    }
  }

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  }

  renderPosts(posts) {
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
        {posts.map(p =>
          <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.author}</td>
            <td>{p.category}</td>
            <td>
              <div className="btn-group btn-group-sm">
                <Link className="btn btn-info" to={`/posts/${p.id}`} >View</Link>
                <Link className="btn btn-warning" to={`/posts/${p.id}/edit`}>Edit</Link>
                <button className="btn btn-danger" onClick={() => this.handlePostDelete(p.id)}>Delete</button>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>;
  }

  render() {
    const posts = this.state.posts;
    const selectedCategory = this.state.selectedCategory;

    const filteredPosts = selectedCategory.id === 'all'
      ? posts
      : posts.filter(p => p.category === selectedCategory.id);

    return <div className="row">
      <div className="col-3">
        <Categories onCategorySelect={this.handleCategorySelect} />
      </div>

      <div className="col">
        <h3>Posts</h3>
        <div>Selected Category: {selectedCategory.name}</div>
        {filteredPosts.length > 0
          ? this.renderPosts(filteredPosts)
          : <div className="alert alert-info">No posts for the selected category.</div>
        }
      </div>
    </div>;
  }

}

export default Posts;
