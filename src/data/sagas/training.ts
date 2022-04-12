import axios from "axios";
// import { AnyAction } from 'redux'
import { call, put, takeLatest } from "redux-saga/effects";

// import { fetchBodySuccess, fetchBodyFail, postBodySuccess, postBodyFail } from "../actions/body";
import actions from '../../common/actionTypes/body';
// import { PostBody, BodyItem } from '../../common/types/body'

import { serverURL } from '../../common/url'
import { ResponseGenerator } from '../../common/types/response'

// const getBody = () =>
//   axios.get<BodyItem[] | []>(`${serverURL}/body`);

// const postBody = (item: BodyItem) =>
//   axios.post<BodyItem[] | []>(`${serverURL}/body/${item._id}`, item);

// function* fetchBodySaga() {
//   try {
//     const response: ResponseGenerator = yield call(getBody);
//     yield put(
//       fetchBodySuccess({
//         data: response.data,
//       })
//     );
//   } catch (e: any) {
//     yield put(
//       fetchBodyFail({
//         error: e.message,
//       })
//     );
//   }
// }

// function* postBodySaga({payload}: PostBody) {
//   try {
//     yield call(postBody, payload.item);
//     yield put(postBodySuccess());
//   } catch (e: any) {
//     yield put(
//       postBodyFail({
//         error: e.message,
//       })
//     );
//   }
// }

function* trainingSaga() {
//   yield takeLatest(actions.FETCH_BODY_DATA, fetchBodySaga)
//   yield takeLatest(actions.POST_BODY_DATA, postBodySaga)
}

export default trainingSaga;