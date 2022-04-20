import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import calendar from '../../data/reducers/calendar'
import exercises from '../../data/reducers/exercises'
import body from '../../data/reducers/body'
import favorites from '../../data/reducers/favorites'
import routines from '../../data/reducers/routines'
import training from '../../data/reducers/training'
import history from '../../data/reducers/history'
import statistics from '../../data/reducers/statistics'

const rootReducer = combineReducers({
  calendar: calendar,
  exercises: exercises,
  body: body,
  favorites: favorites,
  routines: routines,
  training: training,
  history: history,
  statistics: statistics
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer