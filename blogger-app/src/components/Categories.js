import React from 'react';

import { categoryAll } from '../constants';
import { getCategories } from '../api/categories';

const Categories = (props) => {
  const categoriesWithAll = [categoryAll, ...getCategories()];
  return <div>
    <h4>Categories</h4>
    <div className="list-group">
      {categoriesWithAll.map(c => <button
        key={c.id}
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => props.onCategorySelect(c)}
      >
        {c.name}
      </button>)
      }
    </div>
  </div>;
};

export default Categories;
