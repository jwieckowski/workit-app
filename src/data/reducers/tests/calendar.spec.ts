import reducer from '../calendar'
import actions from '../../../common/actionTypes/calendar'
import { AnyAction } from 'redux'
import { CalendarState } from '../../../common/types/calendar'
import {
    openCalendar,
    closeCalendar
} from '../../actions/calendar'

describe('calendar reducer', () => {
  const initialState: CalendarState = {
    open: false
  }
  const action: AnyAction = {
    type: ''
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should open the calendar dialog: ${actions.CALENDAR_OPEN}`, () => {
    expect(reducer(initialState, openCalendar())).toEqual({
      ...initialState,
      open: true
    })
  })

  test(`should close the calendar dialog: ${actions.CALENDAR_CLOSE}`, () => {
    expect(reducer(initialState, closeCalendar())).toEqual({
      ...initialState,
      open: false
    })
  })
})
