import actions from '../../common/actionTypes/history'
import { GetNextTraining, GetPrevTraining } from '../../common/types/history'

export const getNextTraining = (): GetNextTraining => ({
    type: actions.GET_NEXT_TRAINING
})

export const getPrevTraining = (): GetPrevTraining => ({
    type:  actions.GET_PREV_TRAINING
})