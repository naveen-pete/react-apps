import { CategoryActionTypes, categoryAll } from '../constants';

const categoriesReducer = (state = categoryAll, action) => {
  switch (action.type) {
    case CategoryActionTypes.SELECT_CATEGORY:
      return { ...action.payload };

    default:
      return state;
  }
};

export default categoriesReducer;
