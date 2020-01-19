import React, { Component } from 'react';

import { categories } from '../data/store';

class PostForm extends Component {
  state = {
    id: 0,
    title: '',
    body: '',
    author: '',
    category: '',
    initialized: false
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.operation === 'Update' &&
      props.post &&
      !state.initialized
    ) {
      console.log('initializing state with props...');
      return { ...props.post, initialized: true };
    }

    return null;
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, title, body, author, category } = this.state;
    const post = {
      id, title, body, author, category
    };

    this.props.onSubmit(post);
  }

  render() {
    const { title, body, author, category } = this.state;

    return <div>
      <h4 className="mr-3">{this.props.operation} Post</h4>

      <div className="card bg-light">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                placeholder="Enter body"
                rows="3"
                cols="30"
                value={body}
                onChange={this.handleChange}
              >
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                placeholder="Enter author"
                value={author}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select required
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={this.handleChange}
              >
                <option value=""></option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

    </div>;
  }
}

export default PostForm;
