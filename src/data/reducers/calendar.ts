import actions from '../../common/actionTypes/calendar'
import { CalendarActions, CalendarState } from '../../common/types/calendar'

const initialState: CalendarState = {
    open: false
}

export default function calendar (state = initialState, action: CalendarActions) {
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