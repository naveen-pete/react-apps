import { CategoryActionTypes } from '../constants';
import categoryService from '../services/CategoryService';

export const getCategories = () => {
  return dispatch => {
    return categoryService.getAll()
      .then(categories => {
        dispatch(setCategories(categories));
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
}

export const setCategories = categories => {
  return {
    type: CategoryActionTypes.SET_CATEGORIES,
    payload: categories
  };
};

export const selectCategory = category => {
  return {
    type: CategoryActionTypes.SELECT_CATEGORY,
    payload: category
  };
}
