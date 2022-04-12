import actions from '../../common/actionTypes/exercises'
import { AnyAction, Reducer } from 'redux'
import { ExercisesState } from '../../common/types/exercises'

const initialState: ExercisesState = {
    loading: false,
    data: {'key': []},
    error: null,
    openForRoutine: false
}

const exercises: Reducer<ExercisesState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.FETCH_EXERCISES:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_EXERCISES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null
            }
        case actions.FETCH_EXERCISES_FAIL:
            return {
                ...state,
                loading: false,
                data: {'key': []},
                error: action.payload.error
            }
        case actions.OPEN_ROUTINE_EXERCISES:
            return {
                ...state,
                openForRoutine: true
            }
        case actions.CLOSE_ROUTINE_EXERCISES:
            return {
                ...state,
                openForRoutine: false
            }
        default:
            return {
                ...state
            }
    }
}

export default exercises