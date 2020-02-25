import { takeEvery, call, put } from 'redux-saga/effects';

import { PostAction } from "../constants";
import { setPosts, setPost, setCreatedPost, setUpdatedPost, removeDeletedPost } from "../actions/posts";
import postService from '../services/PostService';

function* handleGetPosts() {
  try {
    const posts = yield call(postService.getAll);
    yield put(setPosts(posts));
  } catch (e) {
    console.log('Get posts failed.');
    console.log('Error:', e);
  }
}

function* handleGetPost(action) {
  try {
    const post = yield call(postService.get, action.payload);
    yield put(setPost(post));
  } catch (e) {
    console.log('Get post failed.');
    console.log('Error:', e);
  }
}

function* handleCreatePost(action) {
  try {
    const post = yield call(postService.create, action.payload);
    yield put(setCreatedPost(post));
  } catch (e) {
    console.log('Create post failed.');
    console.log('Error:', e);
  }
}

function* handleUpdatePost(action) {
  try {
    const post = yield call(postService.update, action.payload);
    yield put(setUpdatedPost(post));
  } catch (e) {
    console.log('Update post failed.');
    console.log('Error:', e);
  }
}

function* handleDeletePost(action) {
  try {
    const id = action.payload;
    yield call(postService.delete, id);
    yield put(removeDeletedPost(id));
  } catch (e) {
    console.log('Delete post failed.');
    console.log('Error:', e);
  }
}

export default function* watchPostsSaga() {
  yield takeEvery(PostAction.GET_POSTS, handleGetPosts);
  yield takeEvery(PostAction.GET_POST, handleGetPost);
  yield takeEvery(PostAction.CREATE_POST, handleCreatePost);
  yield takeEvery(PostAction.UPDATE_POST, handleUpdatePost);
  yield takeEvery(PostAction.DELETE_POST, handleDeletePost);
}
