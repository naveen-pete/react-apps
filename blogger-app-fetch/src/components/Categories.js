import React, { Component } from 'react';

import { categoryAll } from '../constants';
import categoryService from '../services/CategoryService';

class Categories extends Component {
  state = {
    categories: []
  }

  async componentDidMount() {
    try {
      const categories = await categoryService.getAll();

      this.setState({ categories });
    } catch (error) {
      console.log('Get categories failed.');
      console.log('Error:', error);
    }
  }

  render() {
    const categoriesWithAll = [categoryAll, ...this.state.categories];

    return <div>
      <h3>Categories</h3>

      <div className="list-group">
        {categoriesWithAll.map(c => <button onClick={() => this.props.onCategorySelect(c)}
          key={c.id} type="button" className="list-group-item list-group-item-action">
          {c.name}
        </button>)}
      </div>
    </div>;
  }
}

export default Categories;
