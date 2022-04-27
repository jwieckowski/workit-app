import reducer from '../statistics'
import actions from '../../../common/actionTypes/statistics'
import { AnyAction } from 'redux'
import { StatisticsState, StatisticsPayload } from '../../../common/types/statistics'
import {
    setDate,
    setPart,
    setExercise,
    setType
} from '../../actions/statistics'

describe('statistics reducer', () => {
  const initialState: StatisticsState = {
    date: '0',
    part: '0',
    exercise: '0',
    type: '0'
  }
  const action: AnyAction = {
    type: ''
  }

  const testStatisticsPayload: StatisticsPayload = {
      id: '1'
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should change index of date: ${actions.SET_DATE}`, () => {
    expect(reducer(initialState, setDate(testStatisticsPayload))).toEqual({
      ...initialState,
      date: testStatisticsPayload.id
    })
  })

  test(`should change index of part: ${actions.SET_PART}`, () => {
    expect(reducer(initialState, setPart(testStatisticsPayload))).toEqual({
      ...initialState,
        part: testStatisticsPayload.id
    })
  })

  test(`should change index of exercise: ${actions.SET_EXERCISE}`, () => {
    expect(reducer(initialState, setExercise(testStatisticsPayload))).toEqual({
      ...initialState,
      exercise: testStatisticsPayload.id
    })
  })

  test(`should change index of type: ${actions.SET_TYPE}`, () => {
    expect(reducer(initialState, setType(testStatisticsPayload))).toEqual({
      ...initialState,
        type: testStatisticsPayload.id
    })
  })
})
