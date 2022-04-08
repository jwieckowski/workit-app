import { all } from "redux-saga/effects";

// import todoSaga from "../../data/sagas/test";
import exercisesSaga from '../../data/sagas/exercises'
import bodySaga from '../../data/sagas/body'
import favoritesSaga from '../../data/sagas/favorites'

export default function* rootSaga() {
  yield all([
    exercisesSaga(),
    bodySaga(),
    favoritesSaga()
  ]);
}