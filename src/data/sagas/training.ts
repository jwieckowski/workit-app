import axios from "axios";
// import { AnyAction } from 'redux'
import { call, put, takeLatest } from "redux-saga/effects";

import {
    fetchTrainingsSuccess,
    fetchTrainingsFail,
    postTrainingSuccess,
    postTrainingFail
} from "../actions/training";
import actions from '../../common/actionTypes/training';
import { TrainingDataItem, PostTraining } from '../../common/types/training'

import { serverURL } from '../../common/url'
import { ResponseGenerator } from '../../common/types/response'

const getTrainings = () =>
  axios.get<TrainingDataItem[] | []>(`${serverURL}/training`);

const postTraining = (item: TrainingDataItem) =>
  axios.post<TrainingDataItem | []>(`${serverURL}/training/${item._id}`, item);

function* fetchTrainingsSaga() {
  try {
    const response: ResponseGenerator = yield call(getTrainings);
    yield put(
      fetchTrainingsSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchTrainingsFail({
        error: e.message,
      })
    );
  }
}

function* postTrainingSaga({payload}: PostTraining) {
  try {
    yield call(postTraining, payload.item);
    yield put(postTrainingSuccess());
  } catch (e: any) {
    yield put(
      postTrainingFail({
        error: e.message,
      })
    );
  }
}

function* trainingSaga() {
  yield takeLatest(actions.FETCH_TRAINING_DATA, fetchTrainingsSaga)
  yield takeLatest(actions.POST_TRAINING_DATA, postTrainingSaga)
}

export default trainingSaga;