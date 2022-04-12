import actions from '../../common/actionTypes/exercises'
import {
    FetchExercisesSuccessData,
    FetchExercisesFailData,
    FetchExercises,
    FetchExercisesSuccess,
    FetchExercisesFail,
    OpenRoutineExercises,
    CloseRoutineExercises
} from '../../common/types/exercises'

export const fetchExercises = (): FetchExercises => ({
    type: actions.FETCH_EXERCISES
})

export const fetchExercisesSuccess = (
    payload: FetchExercisesSuccessData
): FetchExercisesSuccess => {
    return {
        type: actions.FETCH_EXERCISES_SUCCESS,
        payload
    }
}

export const fetchExercisesFail = (
    payload: FetchExercisesFailData
): FetchExercisesFail => ({
    type: actions.FETCH_EXERCISES_FAIL,
    payload
})

export const openRoutineExercises = (): OpenRoutineExercises => ({
    type: actions.OPEN_ROUTINE_EXERCISES
})

export const closeRoutineExercises = (): CloseRoutineExercises => ({
    type: actions.CLOSE_ROUTINE_EXERCISES
})
