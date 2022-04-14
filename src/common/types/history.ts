import actions from '../actionTypes/history'


export interface HistoryState {
    active: number
}

export type GetNextTraining = {
    type: typeof actions.GET_NEXT_TRAINING
}

export type GetPrevTraining = {
    type: typeof actions.GET_PREV_TRAINING
}

