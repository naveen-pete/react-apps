import { CategoryAction } from '../constants';

export const getCategories = () => ({
  type: CategoryAction.GET_CATEGORIES
});

export const setCategories = categories => ({
  type: CategoryAction.SET_CATEGORIES,
  payload: categories
});

export const selectCategory = category => ({
  type: CategoryAction.SELECT_CATEGORY,
  payload: category
});
