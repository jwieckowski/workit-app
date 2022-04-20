import actions from '../../common/actionTypes/statistics'
import { AnyAction, Reducer } from 'redux'
import { StatisticsState } from '../../common/types/statistics'

const initialState: StatisticsState = {
    date: '0',
    part: '0',
    exercise: '0',
    type: '0'
}

const statistics: Reducer<StatisticsState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.SET_DATE:
            return {
                ...state,
                date: action.payload.id
            };
        case actions.SET_PART:
            return {
                ...state,
                part: action.payload.id
            }
        case actions.SET_EXERCISE:
            return {
                ...state,
                exercise: action.payload.id
            }
        case actions.SET_TYPE:
            return {
                ...state,
                type: action.payload.id
            }
        default:
            return {
                ...state
            }
    }
}

export default statistics