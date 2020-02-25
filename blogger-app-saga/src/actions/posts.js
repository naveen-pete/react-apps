import { PostActionTypes } from '../constants';

export const getPosts = () => ({
  type: PostActionTypes.GET_POSTS
});

export const setPosts = posts => ({
  type: PostActionTypes.SET_POSTS,
  payload: posts
});

export const getPost = id => ({
  type: PostActionTypes.GET_POST,
  payload: id
});

export const setPost = post => ({
  type: PostActionTypes.SET_POST,
  payload: post
});

export const createPost = post => ({
  type: PostActionTypes.CREATE_POST,
  payload: post
});

export const setCreatedPost = post => ({
  type: PostActionTypes.SET_CREATED_POST,
  payload: post
});

export const updatePost = post => ({
  type: PostActionTypes.UPDATE_POST,
  payload: post
});

export const setUpdatedPost = post => ({
  type: PostActionTypes.SET_UPDATED_POST,
  payload: post
});

export const deletePost = id => ({
  type: PostActionTypes.DELETE_POST,
  payload: id
});

export const removeDeletedPost = id => ({
  type: PostActionTypes.REMOVE_DELETED_POST,
  payload: id
});
