import reducer from '../favorites'
import actions from '../../../common/actionTypes/favorites'
import { AnyAction } from 'redux'
import {
    FavoritesState,
    FavoriteItem,
    FetchFavoritesSuccessData,
    FavoritesFailData,
    PayloadFavoriteData
} from '../../../common/types/favorites'
import {
    fetchFavorites,
    fetchFavoritesSuccess,
    fetchFavoritesFail,
    postFavorite,
    postFavoriteSuccess,
    postFavoriteFail,
    deleteFavorite,
    deleteFavoriteSuccess,
    deleteFavoriteFail,
} from '../../actions/favorites'

describe('favorites reducer', () => {
  const initialState: FavoritesState = {
    posting: false,
    deleting: false,
    item: null,
    loading: false,
    data: [],
    error: null,
  }

  const action: AnyAction = {
    type: ''
  }

  const testFavoriteData: FavoriteItem[] = [
    {"_id": 1},
    {"_id": 2},
    {"_id": 3},
  ]

  const testFavoritePayload: FetchFavoritesSuccessData = {
    data: testFavoriteData
  }

  const testFavoriteFailPayload: FavoritesFailData = {
    error: 'Test error'
  }

  const testPostFavoritePayload: PayloadFavoriteData = {
    item: { "_id": 4 }
  }

  const postState: FavoritesState = {
    posting: false,
    deleting: false,
    item: { "_id": 4 },
    loading: false,
    data: [],
    error: null,
  }

  const deleteState: FavoritesState = {
    posting: false,
    deleting: false,
    item: { "_id": 3 },
    loading: false,
    data: testFavoriteData,
    error: null,
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should start fetching the favorites data: ${actions.FETCH_FAVORITES}`, () => {
    expect(reducer(initialState, fetchFavorites())).toEqual({
      ...initialState,
      loading: true
    })
  })

  test(`should fetch the favorites data successfully: ${actions.FETCH_FAVORITES_SUCCESS}`, () => {
    expect(reducer(initialState, fetchFavoritesSuccess(testFavoritePayload))).toEqual({
      ...initialState,
      loading: false,
      data: testFavoritePayload.data
    })
  })

  test(`should fail fetching and stop loading: ${actions.FETCH_FAVORITES_FAIL}`, () => {
    expect(reducer(initialState, fetchFavoritesFail(testFavoriteFailPayload))).toEqual({
      ...initialState,
      loading: false,
      error: testFavoriteFailPayload.error
    })
  })

  test(`should start posting the favorite item: ${actions.POST_FAVORITE}`, () => {
    expect(reducer(initialState, postFavorite(testPostFavoritePayload))).toEqual({
      ...initialState,
      posting: true,
      item: testPostFavoritePayload.item
    })
  })

  test(`should post the favorite item successfully: ${actions.POST_FAVORITE_SUCCESS}`, () => {
    expect(reducer(postState, postFavoriteSuccess())).toEqual({
      ...postState,
      loading: false,
      data: [postState.item, ...postState.data],
      item: null
    })
  })

  test(`should fail posting favorite item: ${actions.POST_FAVORITE_FAIL}`, () => {
    expect(reducer(postState, postFavoriteFail(testFavoriteFailPayload))).toEqual({
      ...postState,
      loading: false,
      error: testFavoriteFailPayload.error,
      item: null
    })
  })

  test(`should start deleting the favorite item: ${actions.DELETE_FAVORITE}`, () => {
    expect(reducer(deleteState, deleteFavorite(testPostFavoritePayload))).toEqual({
      ...deleteState,
      deleting: true,
      item: testPostFavoritePayload.item
    })
  })

  test(`should delete the favorite item successfully: ${actions.DELETE_FAVORITE_SUCCESS}`, () => {
    expect(reducer(deleteState, deleteFavoriteSuccess())).toEqual({
      ...deleteState,
      deleting: false,
      data: [...deleteState.data.filter(d => d._id !== deleteState.item?._id)],
      item: null
    })
  })

  test(`should fail deleting favorite item: ${actions.DELETE_FAVORITE_FAIL}`, () => {
    expect(reducer(deleteState, deleteFavoriteFail(testFavoriteFailPayload))).toEqual({
      ...deleteState,
      deleting: false,
      error: testFavoriteFailPayload.error,
      item: null
    })
  })
})
