import actions from '../../common/actionTypes/training'
import { StartTraining, FinishTraining } from '../../common/types/training'

export const startTraining = (): StartTraining => ({
    type: actions.START_TRAINING,
})

export const finishTraining = (): FinishTraining => ({
    type:  actions.FINISH_TRAINING
})