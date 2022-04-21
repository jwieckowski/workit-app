import actions from '../../common/actionTypes/routines'
import { AnyAction, Reducer } from 'redux'
import { RoutinesState } from '../../common/types/routines'

const initialState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: null,
    data: [],
    error: null,
    open: false,
    startTrainingOpen: false
}

const routines: Reducer<RoutinesState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.FETCH_ROUTINES:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_ROUTINES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null
            }
        case actions.FETCH_ROUTINES_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload.error
            }
        case actions.POST_ROUTINE:
            return {
                ...state,
                posting: true,
                item: action.payload.item
            };
        case actions.POST_ROUTINE_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state?.item ? [...state.data, state.item] : state.data,
                item: null,
                error: null
            }
        case actions.POST_ROUTINE_FAIL:
            return {
                ...state,
                posting: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        case actions.UPDATE_ROUTINE:
            return {
                ...state,
                updating: true,
                item: action.payload.item
            };
        case actions.UPDATE_ROUTINE_SUCCESS:
            return {
                ...state,
                updating: false,
                data: state?.item ? [...state.data.map(d => d._id === state?.item?._id ? state.item : d)] : state.data,
                item: null,
                error: null
            }
        case actions.UPDATE_ROUTINE_FAIL:
            return {
                ...state,
                updating: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        case actions.DELETE_ROUTINE:
            return {
                ...state,
                deleting: true,
                item: action.payload.item
            };
        case actions.DELETE_ROUTINE_SUCCESS:
            return {
                ...state,
                deleting: false,
                data: state?.item ? [...state.data.filter(d => d._id !== state.item?._id)] : state.data,
                item: null,
                error: null
            }
        case actions.DELETE_ROUTINE_FAIL:
            return {
                ...state,
                deleting: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        case actions.SET_ACTIVE_ROUTINE:
            return {
                ...state,
                item:
                    action.payload._id === null
                        ? null
                        : state.data.filter(d => d._id === action.payload._id)[0]
            }
        case actions.ADD_ROUTINE_EXERCISE:
            return {
                ...state,
                item: state.item !== null
                ? {
                    ...state.item,
                    exercises: [...state?.item?.exercises, { _id: action.payload._id} ]
                  }
                : state.item
            }
        case actions.DELETE_ROUTINE_EXERCISE:
            return {
                ...state,
                item: state.item !== null
                ? {
                    ...state.item,
                    exercises: [...state?.item?.exercises.filter(d => d._id !== action.payload._id)]
                }
                : state.item
            }
        case actions.POST_ROUTINE_EXERCISES:
            return {
                ...state,
                posting: true,
                item: action.payload.item
            }
        case actions.POST_ROUTINE_EXERCISES_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state?.item !== null ? [...state.data.map(d => d._id === state?.item?._id ? state.item : d)] : state.data,
                item: null,
                error: null
            }
        case actions.POST_ROUTINE_EXERCISES_FAIL:
            return {
                ...state,
                posting: false,
                data: state.data,
                item: null,
                error: action.payload.error
            }
        case actions.OPEN_ROUTINE_DIALOG:
            return {
                ...state,
                open: true,
                updating: action?.payload?.updating ? true : false,
                item: action?.payload?.updating ? state.data.filter(d => d._id === action.payload._id)[0] : null
            }
        case actions.CLOSE_ROUTINE_DIALOG:
            return {
                ...state,
                open: false,
                item: null,
                updating: false,
            }
        case actions.OPEN_TRAINING_DIALOG:
            return {
                ...state,
                startTrainingOpen: true,
            }
        case actions.CLOSE_TRAINING_DIALOG:
            return {
                ...state,
                startTrainingOpen: false,
            }
        default:
            return {
                ...state
            }
    }
}

export default routines