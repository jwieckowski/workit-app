import actions from '../../common/actionTypes/calendar'
import { AnyAction, Reducer } from 'redux'
import { CalendarState } from '../../common/types/calendar'

const initialState: CalendarState = {
    open: false
}

const calendar: Reducer<CalendarState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.CALENDAR_OPEN:
            return {
                ...state,
                open: true
            };
        case actions.CALENDAR_CLOSE:
            return {
                ...state,
                open: false
            }
        default:
            return {
                ...state
            }
    }
}

export default calendar