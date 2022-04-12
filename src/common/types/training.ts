import actions from '../actionTypes/training'


export interface TrainingState {
    active: boolean,
    time: number
}

export type StartTraining = {
    type: typeof actions.START_TRAINING
}

export type FinishTraining = {
    type: typeof actions.FINISH_TRAINING
}

