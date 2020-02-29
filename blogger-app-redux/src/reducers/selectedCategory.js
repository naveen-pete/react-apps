import { CategoryAction, categoryAll } from '../constants';

const categoriesReducer = (state = categoryAll, action) => {
  switch (action.type) {
    case CategoryAction.SELECT_CATEGORY:
      return { ...action.payload };

    default:
      return state;
  }
};

export default categoriesReducer;
