import { CategoryAction } from '../constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CategoryAction.SET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default categoriesReducer;
