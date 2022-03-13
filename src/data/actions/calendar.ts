import actions from '../../common/actionTypes/calendar'
import { OpenCalendar, CloseCalendar } from '../../common/types/calendar'

export const openCalendar = (): OpenCalendar => ({
    type: actions.CALENDAR_OPEN
})

export const closeCalendar = (): CloseCalendar => ({
    type:  actions.CALENDAR_CLOSE
})