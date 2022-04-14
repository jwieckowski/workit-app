import actions from '../../common/actionTypes/history'
import { AnyAction, Reducer } from 'redux'
import { HistoryState } from '../../common/types/history'

const initialState: HistoryState = {
    active: 0
}

const history: Reducer<HistoryState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.GET_NEXT_TRAINING:
            return {
                ...state,
                active: state.active - 1
            };
        case actions.GET_PREV_TRAINING:
            return {
                ...state,
                active: state.active + 1
            }
        default:
            return {
                ...state
            }
    }
}

export default history