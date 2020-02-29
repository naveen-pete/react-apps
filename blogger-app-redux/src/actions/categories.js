import { CategoryAction } from '../constants';
import categoryService from '../services/CategoryService';

export const getCategories = () => {
  return async dispatch => {
    try {
      const categories = await categoryService.getAll();
      dispatch(setCategories(categories));
    } catch (error) {
      console.log('Get categories failed.');
      console.log('Error:', error);
    }
  };
};

export const setCategories = categories => ({
  type: CategoryAction.SET_CATEGORIES,
  payload: categories
});

export const selectCategory = category => ({
  type: CategoryAction.SELECT_CATEGORY,
  payload: category
});
