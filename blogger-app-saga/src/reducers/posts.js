import { PostActionTypes } from '../constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostActionTypes.SET_POSTS:
      return [...action.payload];

    case PostActionTypes.SET_POST:
    case PostActionTypes.SET_UPDATED_POST:
      const payload = action.payload;
      const post = state.find(p => p.id === payload.id);
      let newState = post
        ? state.map(p => p.id === payload.id ? payload : { ...p })
        : [...state, payload];
      return newState;

    case PostActionTypes.SET_CREATED_POST:
      return [...state, action.payload];

    case PostActionTypes.REMOVE_DELETED_POST:
      return state.filter(post => post.id !== action.payload);

    default:
      return state;
  }
};

export default postsReducer;
