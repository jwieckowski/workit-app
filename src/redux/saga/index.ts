import { all } from "redux-saga/effects";

import exercisesSaga from '../../data/sagas/exercises'
import bodySaga from '../../data/sagas/body'
import favoritesSaga from '../../data/sagas/favorites'
import routinesSaga from '../../data/sagas/routines'
import trainingSaga from '../../data/sagas/training'


export default function* rootSaga() {
  yield all([
    exercisesSaga(),
    bodySaga(),
    favoritesSaga(),
    routinesSaga(),
    trainingSaga(),
  ]);
}