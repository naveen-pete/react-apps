import { CategoryActionTypes } from '../constants';

export const getCategories = () => ({
  type: CategoryActionTypes.GET_CATEGORIES
});

export const setCategories = categories => ({
  type: CategoryActionTypes.SET_CATEGORIES,
  payload: categories
});

export const selectCategory = category => ({
  type: CategoryActionTypes.SELECT_CATEGORY,
  payload: category
});
