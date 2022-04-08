import actions from '../actionTypes/calendar'


export interface CalendarState {
    open: boolean
}

export type OpenCalendar = {
    type: typeof actions.CALENDAR_OPEN
}

export type CloseCalendar = {
    type: typeof actions.CALENDAR_CLOSE
}

