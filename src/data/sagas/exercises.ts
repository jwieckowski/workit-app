import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchExercisesSuccess, fetchExercisesFail } from "../actions/exercises";
import actions from '../../common/actionTypes/exercises';
import { ExercisesList } from '../../common/types/exercises'

import { serverURL } from '../../common/url'
import { ResponseGenerator } from '../../common/types/response'

const getExercises = () =>
  axios.get<ExercisesList>(`${serverURL}/exercises`);

function* fetchExercisesSaga() {
  try {
    const response: ResponseGenerator = yield call(getExercises);
    yield put(
      fetchExercisesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchExercisesFail({
        error: e.message,
      })
    );
  }
}

function* exercisesSaga() {
  yield all([takeLatest(actions.FETCH_EXERCISES, fetchExercisesSaga)]);
}

export default exercisesSaga;