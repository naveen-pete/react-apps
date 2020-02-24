import { CategoryActionTypes } from '../constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default categoriesReducer;
