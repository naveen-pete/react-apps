import { takeEvery, call, put } from 'redux-saga/effects';

import { CategoryActionTypes } from "../constants";
import { setCategories } from "../actions/categories";
import categoryService from '../services/CategoryService';

function* handleGetCategories() {
  try {
    const categories = yield call(categoryService.getAll);
    yield put(setCategories(categories));
  } catch (e) {
    console.log('Get categories failed');
    console.log('Error:', e);
  }
}

export default function* watchCategoriesSaga() {
  yield takeEvery(CategoryActionTypes.GET_CATEGORIES, handleGetCategories);
}

