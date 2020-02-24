import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import postsReducer from './posts';
import selectedCategoryReducer from './selectedCategory';

const appReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer
});

export default appReducer;
