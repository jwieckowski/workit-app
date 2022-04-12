import actions from '../../common/actionTypes/training'
import { AnyAction, Reducer } from 'redux'
import { TrainingState } from '../../common/types/training'

const initialState: TrainingState = {
    active: false,
    time: 0
}

const training: Reducer<TrainingState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.START_TRAINING:
            return {
                ...state,
                active: true
            };
        case actions.FINISH_TRAINING:
            return {
                ...state,
                active: false
            }
        default:
            return {
                ...state
            }
    }
}

export default training