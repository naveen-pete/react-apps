import React from 'react';
import { connect } from 'react-redux';

import { categoryAll } from '../constants';
import { selectCategory } from '../actions/categories';

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
          onClick={() => props.selectCategory(c)}
        >
          {c.name}
        </button>
      })}
    </div>
  </div>
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch(selectCategory(category))
});

export default connect(null, mapDispatchToProps)(Categories);
