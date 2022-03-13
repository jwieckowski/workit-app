import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import calendar from '../../data/reducers/calendar'

const rootReducer = combineReducers({
  calendar: calendar
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer