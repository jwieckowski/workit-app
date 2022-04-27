import reducer from '../history'
import actions from '../../../common/actionTypes/history'
import { AnyAction } from 'redux'
import { HistoryState } from '../../../common/types/history'
import {
    getNextTraining,
    getPrevTraining
} from '../../actions/history'

describe('history reducer', () => {
  const initialState: HistoryState = {
    active: 0
  }

  const nextState: HistoryState = {
    active: 1
  }

  const prevState: HistoryState = {
    active: 0
  }

  const action: AnyAction = {
    type: ''
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should get next history training index: ${actions.GET_NEXT_TRAINING}`, () => {
    expect(reducer(nextState, getNextTraining())).toEqual({
      ...nextState,
      active: nextState.active - 1
    })
})

test(`should get prev history training index: ${actions.GET_PREV_TRAINING}`, () => {
    expect(reducer(prevState, getPrevTraining())).toEqual({
        ...initialState,
        active: prevState.active + 1
    })
  })
})
