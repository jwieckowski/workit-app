import axios from "axios";
// import { AnyAction } from 'redux'
import { call, put, takeLatest } from "redux-saga/effects";

import {
    fetchFavoritesSuccess,
    fetchFavoritesFail,
    postFavoriteSuccess,
    postFavoriteFail,
    deleteFavoriteSuccess,
    deleteFavoriteFail,
} from "../actions/favorites";
import actions from '../../common/actionTypes/favorites';
import { FavoriteItem, PostFavorite, DeleteFavorite } from '../../common/types/favorites'

import { serverURL } from '../../common/url'
import { ResponseGenerator } from '../../common/types/response'

const getFavorites = () =>
  axios.get<FavoriteItem[] | []>(`${serverURL}/favorite`);

const postFavorite = (item: FavoriteItem) =>
  axios.post<FavoriteItem[] | []>(`${serverURL}/favorite/${item._id}`, item);

const deleteFavorite = (item: FavoriteItem) =>
  axios.delete<FavoriteItem[] | []>(`${serverURL}/favorite/${item._id}`);

function* fetchFavoritesSaga() {
  try {
    const response: ResponseGenerator = yield call(getFavorites);
    yield put(
      fetchFavoritesSuccess({
        data: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchFavoritesFail({
        error: e.message,
      })
    );
  }
}

function* postFavoriteSaga({payload}: PostFavorite) {
  try {
    yield call(postFavorite, payload.item);
    yield put(postFavoriteSuccess());
  } catch (e: any) {
    yield put(
      postFavoriteFail({
        error: e.message,
      })
    );
  }
}

function* deleteFavoriteSaga({payload}: DeleteFavorite) {
  try {
    yield call(deleteFavorite, payload.item);
    yield put(deleteFavoriteSuccess());
  } catch (e: any) {
    yield put(
      deleteFavoriteFail({
        error: e.message,
      })
    );
  }
}

function* favoritesSaga() {
  yield takeLatest(actions.FETCH_FAVORITES, fetchFavoritesSaga)
  yield takeLatest(actions.POST_FAVORITE, postFavoriteSaga)
  yield takeLatest(actions.DELETE_FAVORITE, deleteFavoriteSaga)
}

export default favoritesSaga;