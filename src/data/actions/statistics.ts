import actions from '../../common/actionTypes/statistics'
import {
    SetDate,
    SetPart,
    SetExercise,
    SetType,
    StatisticsPayload
} from '../../common/types/statistics'

export const setDate = (
    payload: StatisticsPayload
): SetDate => ({
    type: actions.SET_DATE,
    payload
})

export const setPart = (
    payload: StatisticsPayload
): SetPart => ({
    type: actions.SET_PART,
    payload
})

export const setExercise = (
    payload: StatisticsPayload
): SetExercise => ({
    type: actions.SET_EXERCISE,
    payload
})

export const setType = (
    payload: StatisticsPayload
): SetType => ({
    type: actions.SET_TYPE,
    payload
})

