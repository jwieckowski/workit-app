import { all, fork } from "redux-saga/effects";

import todoSaga from "../../data/sagas/test";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}