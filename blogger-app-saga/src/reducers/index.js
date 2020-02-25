import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import postsReducer from './posts';
import selectedCategoryReducer from './selectedCategory';

const rootReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer
});

export default rootReducer;
