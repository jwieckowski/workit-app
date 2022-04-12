import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
    fetchRoutinesSuccess,
    fetchRoutinesFail,
    postRoutineSuccess,
    postRoutineFail,
    updateRoutineSuccess,
    updateRoutineFail,
    deleteRoutineSuccess,
    deleteRoutineFail,
    postRoutineExercisesSuccess,
    postRoutineExercisesFail
} from "../actions/routines";
import actions from '../../common/actionTypes/routines';
import {
  RoutineItem,
  PostRoutine,
  UpdateRoutine,
  DeleteRoutine,
  PostRoutineExercises
} from '../../common/types/routines'

import { serverURL } from '../../common/url'
import { ResponseGenerator } from '../../common/types/response'

const getRoutines = () =>
  axios.get<RoutineItem[] | []>(`${serverURL}/routines`);

const postRoutine = (item: RoutineItem) =>
  axios.post<RoutineItem[] | []>(`${serverURL}/routines/${item._id}`, item);

const deleteRoutine = (item: RoutineItem) =>
  axios.delete<RoutineItem[] | []>(`${serverURL}/routines/${item._id}`);

function* fetchRoutinesSaga() {
  try {
    const response: ResponseGenerator = yield call(getRoutines);
    yield put(
      fetchRoutinesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchRoutinesFail({
        error: e.message,
      })
    );
  }
}

function* postRoutineSaga({payload}: PostRoutine) {
  try {
    yield call(postRoutine, payload.item);
    yield put(postRoutineSuccess());
  } catch (e: any) {
    yield put(
      postRoutineFail({
        error: e.message,
      })
    );
  }
}

function* updateRoutineSaga({payload}: UpdateRoutine) {
  try {
    yield call(postRoutine, payload.item);
    yield put(updateRoutineSuccess());
  } catch (e: any) {
    yield put(
      updateRoutineFail({
        error: e.message,
      })
    );
  }
}

function* deleteRoutineSaga({payload}: DeleteRoutine) {
  try {
    yield call(deleteRoutine, payload.item);
    yield put(deleteRoutineSuccess());
  } catch (e: any) {
    yield put(
      deleteRoutineFail({
        error: e.message,
      })
    );
  }
}

function* postRoutineExercisesSaga({payload}: PostRoutineExercises) {
  try {
    yield call(postRoutine, payload.item);
    yield put(postRoutineExercisesSuccess());
  } catch (e: any) {
    yield put(
      postRoutineExercisesFail({
        error: e.message,
      })
    );
  }
}

function* routinesSaga() {
  yield takeLatest(actions.FETCH_ROUTINES, fetchRoutinesSaga)
  yield takeLatest(actions.POST_ROUTINE, postRoutineSaga)
  yield takeLatest(actions.UPDATE_ROUTINE, updateRoutineSaga)
  yield takeLatest(actions.DELETE_ROUTINE, deleteRoutineSaga)
  yield takeLatest(actions.POST_ROUTINE_EXERCISES, postRoutineExercisesSaga)
}

export default routinesSaga;