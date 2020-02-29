import { PostAction } from '../constants';
import postService from '../services/PostService';

export const getPosts = () => {
  return async dispatch => {
    try {
      const posts = await postService.getAll();
      dispatch(setPosts(posts));
    } catch (error) {
      console.log('Get posts failed.');
      console.log('Error:', error);
    }
  };
};

const setPosts = posts => ({
  type: PostAction.SET_POSTS,
  payload: posts
});

export const getPost = id => {
  return async dispatch => {
    try {
      const post = await postService.get(id);
      dispatch(setPost(post));
    } catch (error) {
      console.log('Get post failed.');
      console.log('Error:', error);
    }
  };
};

const setPost = post => ({
  type: PostAction.SET_POST,
  payload: post
});

export const createPost = post => {
  return async dispatch => {
    try {
      const newPost = await postService.create(post);
      dispatch(setCreatedPost(newPost));
    } catch (error) {
      console.log('Create post failed.');
      console.log('Error:', error);
    }
  };
};

const setCreatedPost = post => ({
  type: PostAction.SET_CREATED_POST,
  payload: post
});

export const updatePost = post => {
  return async dispatch => {
    try {
      const updatedPost = await postService.update(post);
      dispatch(setUpdatedPost(updatedPost));
    } catch (error) {
      console.log('Update post failed.');
      console.log('Error:', error);
    }
  };
};

const setUpdatedPost = post => ({
  type: PostAction.SET_UPDATED_POST,
  payload: post
});

export const deletePost = id => {
  return async dispatch => {
    try {
      await postService.delete(id);
      dispatch(removeDeletedPost(id))
    } catch (error) {
      console.log('Delete post failed.');
      console.log('Error:', error);
    }
  };
};

const removeDeletedPost = id => ({
  type: PostAction.REMOVE_DELETED_POST,
  payload: id
});
