import React from 'react';
import { connect } from 'react-redux';

import { categoryAll } from '../constants';
import { selectCategory } from '../actions/categories';

const Categories = props => {
  const categoriesWithAll = [categoryAll, ...props.categories];

  return <div>
    <h3>Categories</h3>

    <div className="list-group">
      {categoriesWithAll.map(c => <button onClick={() => props.selectCategory(c)}
        key={c.id} type="button" className="list-group-item list-group-item-action">
        {c.name}
      </button>)}
    </div>
  </div>;
};

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
