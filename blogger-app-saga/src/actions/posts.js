import { PostAction } from '../constants';

export const getPosts = () => ({
  type: PostAction.GET_POSTS
});

export const setPosts = posts => ({
  type: PostAction.SET_POSTS,
  payload: posts
});

export const getPost = id => ({
  type: PostAction.GET_POST,
  payload: id
});

export const setPost = post => ({
  type: PostAction.SET_POST,
  payload: post
});

export const createPost = post => ({
  type: PostAction.CREATE_POST,
  payload: post
});

export const setCreatedPost = post => ({
  type: PostAction.SET_CREATED_POST,
  payload: post
});

export const updatePost = post => ({
  type: PostAction.UPDATE_POST,
  payload: post
});

export const setUpdatedPost = post => ({
  type: PostAction.SET_UPDATED_POST,
  payload: post
});

export const deletePost = id => ({
  type: PostAction.DELETE_POST,
  payload: id
});

export const removeDeletedPost = id => ({
  type: PostAction.REMOVE_DELETED_POST,
  payload: id
});
