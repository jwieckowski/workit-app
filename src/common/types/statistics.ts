import actions from '../actionTypes/statistics'


export interface StatisticsState {
    date: string,
    part: string,
    exercise: string,
    type: string
}

export interface StatisticsPayload {
    id: string
}

export type SetDate = {
    type: typeof actions.SET_DATE,
    payload: StatisticsPayload
}

export type SetPart = {
    type: typeof actions.SET_PART,
    payload: StatisticsPayload
}

export type SetExercise = {
    type: typeof actions.SET_EXERCISE,
    payload: StatisticsPayload
}

export type SetType = {
    type: typeof actions.SET_TYPE,
    payload: StatisticsPayload
}

