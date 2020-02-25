import { PostAction } from '../constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case PostAction.SET_POSTS:
      return [...action.payload];

    case PostAction.SET_POST:
    case PostAction.SET_UPDATED_POST:
      const payload = action.payload;
      const post = state.find(p => p.id === payload.id);
      let newState = post
        ? state.map(p => p.id === payload.id ? payload : { ...p })
        : [...state, payload];
      return newState;

    case PostAction.SET_CREATED_POST:
      return [...state, action.payload];

    case PostAction.REMOVE_DELETED_POST:
      return state.filter(post => post.id !== action.payload);

    default:
      return state;
  }
};

export default postsReducer;
