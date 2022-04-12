import actions from '../actionTypes/exercises'

export interface ExerciseItem {
    _id: number,
    name: string,
    type: string
}

export interface ExercisesList {
    [key: string]: ExerciseItem[] | []
}

export interface ExercisesState {
    loading: boolean,
    data: ExercisesList,
    error: string | null,
    openForRoutine: boolean
}

export interface FetchExercisesSuccessData {
    data: ExercisesList,
}

export interface FetchExercisesFailData {
    error: string
}

export interface FetchExercises {
    type: typeof actions.FETCH_EXERCISES,
}

export interface FetchExercisesSuccess {
    type: typeof actions.FETCH_EXERCISES_SUCCESS,
    payload: FetchExercisesSuccessData
}

export interface FetchExercisesFail {
    type: typeof actions.FETCH_EXERCISES_FAIL,
    payload: FetchExercisesFailData
}

export interface OpenRoutineExercises {
    type: typeof actions.OPEN_ROUTINE_EXERCISES
}


export interface CloseRoutineExercises {
    type: typeof actions.CLOSE_ROUTINE_EXERCISES
}


