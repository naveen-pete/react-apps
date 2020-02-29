import React from 'react';

import { categoryAll } from '../constants';

const Categories = (props) => {
  const categories = props.data;

  const categoriesWithAll = [categoryAll, ...categories];

  return <div>
    <h3>Categories</h3>

    <div className="list-group">
      {categoriesWithAll.map(c => {
        return <button
          key={c.id}
          type="button"
          className="list-group-item list-group-item-action"
          onClick={() => props.onCategorySelect(c)}
        >
          {c.name}
        </button>
      })}
    </div>
  </div>
};

export default Categories;
