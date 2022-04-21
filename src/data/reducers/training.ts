import actions from '../../common/actionTypes/training'
import { AnyAction, Reducer } from 'redux'
import { TrainingState } from '../../common/types/training'

const initialState: TrainingState = {
    active: false,
    open: false,
    url: '',
    exerciseID: null,
    time: 0,
    loading: false,
    posting: false,
    editMode: false,
    data: [],
    item: null,
    error: null
}

const training: Reducer<TrainingState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.START_TRAINING:
            return {
                ...state,
                active: true,
                item: {
                    ...action.payload.item,
                    _id: state.data.length + 1
                },
                exerciseID: action.payload.exerciseID
            };
        case actions.FINISH_TRAINING:
            return {
                ...state,
                active: false,
                exerciseID: null
            }
        case actions.SET_ACTIVE_EXERCISE:
            return {
                ...state,
                exerciseID: action.payload.exerciseID !== null ? action.payload.exerciseID : null
            }
        case actions.FETCH_TRAINING_DATA:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_TRAINING_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data.reverse(),
                error: null
            }
        case actions.FETCH_TRAINING_DATA_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload.error
            }
        case actions.POST_TRAINING_DATA:
            return {
                ...state,
                posting: true,
            };
        case actions.POST_TRAINING_DATA_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state?.item ? [state.item, ...state.data] : state.data,
                item: null,
                error: null
            }
        case actions.POST_TRAINING_DATA_FAIL:
            return {
                ...state,
                posting: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        case actions.OPEN_ACTIVE_TRAINING_DIALOG:
            return {
                ...state,
                open: true,
                url: action.payload.url
            }
        case actions.CLOSE_ACTIVE_TRAINING_DIALOG:
            return {
                ...state,
                open: false,
                url: '',
                item: null
            }
        case actions.START_EDIT_MODE:
            return {
                ...state,
                editMode: true
            }
        case actions.ADD_TRAINING_SERIES:
            return {
                ...state,
                item: state.item !== null ? {
                    ...state.item,
                    trainingSeries: state.item.trainingSeries.filter(s => s.exerciseID === action.payload.exerciseID).length > 0
                        ? [...state.item.trainingSeries.map(s => {
                            return {
                                ...s,
                                data: s.exerciseID === action.payload.exerciseID
                                    ? [...s.data,  {weights: action.payload.weights, reps: action.payload.reps}]
                                    : s.data
                            }
                        })]
                        : [...state.item.trainingSeries, { exerciseID: action.payload.exerciseID, data: [{ weights: action.payload.weights, reps: action.payload.reps}]}]
                } : state.item
            }
        case actions.EDIT_TRAINING_SERIES:
            return {
                ...state,
                editMode: false,
                item: state.item !== null ? {
                    ...state.item,
                    trainingSeries: state.item.trainingSeries.filter(s => s.exerciseID === action.payload.exerciseID).length > 0
                        ? [...state.item.trainingSeries.map(s => {
                            return {
                                ...s,
                                data: s.exerciseID === action.payload.exerciseID
                                    ? s.data.length > action.payload.series - 1
                                        ? [...s.data.map((serie, idx) => {
                                            return idx === action.payload.series - 1
                                                ? {
                                                    weights: action.payload.weights,
                                                    reps: action.payload.reps
                                                }
                                                : serie
                                        })]
                                        : s.data
                                    : s.data
                            }
                        })]
                        : state.item.trainingSeries
                } : state.item
            }
        case actions.DELETE_TRAINING_SERIES:
            return {
                ...state,
                editMode: false,
                item: state.item !== null ? {
                    ...state.item,
                    trainingSeries: state.item.trainingSeries.filter(s => s.exerciseID === action.payload.exerciseID).length > 0
                        ? [...state.item.trainingSeries.map(s => {
                            return {
                                ...s,
                                data: s.exerciseID === action.payload.exerciseID
                                    ? s.data.length > action.payload.series - 1
                                        ? [...s.data.filter((_, idx) => idx !== action.payload.series - 1)]
                                        : s.data
                                    : s.data
                            }
                        })]
                        : state.item.trainingSeries
                } : state.item
            }
        default:
            return {
                ...state
            }
    }
}

export default training