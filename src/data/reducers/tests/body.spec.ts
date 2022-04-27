import reducer from '../body'
import actions from '../../../common/actionTypes/body'
import { AnyAction } from 'redux'
import { BodyState, BodyItem, FetchBodySuccessData, BodyFailData, PostBodyData } from '../../../common/types/body'
import {
    fetchBody,
    fetchBodySuccess,
    fetchBodyFail,
    postBody,
    postBodySuccess,
    postBodyFail
} from '../../actions/body'

describe('body data reducer', () => {
  const initialState: BodyState = {
    posting: false,
    item: null,
    loading: false,
    data: [],
    error: null
  }

  const testBodyData: BodyItem[] = [
    {
      _id: 1,
      weight: 80,
      date: "2022-04-10"
    },
    {
      _id: 2,
      weight: 81,
      date: "2022-04-11"
    },
    {
      _id: 3,
      weight: 82,
      date: "2022-04-12"
    }
  ]

  const testBodyPayload: FetchBodySuccessData = {
    data: testBodyData
  }

  const testBodyPayloadFail: BodyFailData = {
    error: 'Test error'
  }

  const testPostBody: PostBodyData = {
    item: {
      _id: 4,
      weight: 80,
      date: "2022-04-13"
    }
  }

  const action: AnyAction = {
    type: ''
  }

   const postState: BodyState = {
    posting: false,
    item: testPostBody.item,
    loading: false,
    data: [],
    error: null
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test('should handle the modified reducer state when action dispatched', () => {
    expect(reducer(initialState, fetchBody())).toEqual({
      ...initialState,
      loading: true
    })
  })

  test(`should handle ${actions.FETCH_BODY_DATA_SUCCESS}`, () => {
    expect(reducer(initialState, fetchBodySuccess(testBodyPayload))).toEqual({
      ...initialState,
      data: testBodyPayload.data,
      loading: false,
      error: null
    })
  })

  test(`should handle ${actions.FETCH_BODY_DATA_FAIL}`, () => {

    expect(reducer(initialState, fetchBodyFail(testBodyPayloadFail))).toEqual({
      ...initialState,
      loading: false,
      error: testBodyPayloadFail.error
    })
  })

  test('should handle the post action in reducer state when action dispatched', () => {
    expect(reducer(initialState, postBody(testPostBody))).toEqual({
      ...initialState,
      posting: true,
      item: testPostBody.item
    })
  })

  test(`should handle ${actions.POST_BODY_DATA_SUCCESS}`, () => {
    expect(reducer(postState, postBodySuccess())).toEqual({
      ...initialState,
      data: [testPostBody.item, ...postState.data],
      posting: false,
      error: null,
      item: null
    })
  })

  test(`should handle ${actions.POST_BODY_DATA_FAIL}`, () => {

    expect(reducer(postState, postBodyFail(testBodyPayloadFail))).toEqual({
      ...initialState,
      posting: false,
      item: null,
      error: testBodyPayloadFail.error
    })
  })
})
