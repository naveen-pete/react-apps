import { all } from "redux-saga/effects";

import watchCategoriesSaga from "./categories";
import watchPostsSaga from './posts';

export default function* rootSaga() {
  yield all([
    watchCategoriesSaga(),
    watchPostsSaga()
  ]);
}
