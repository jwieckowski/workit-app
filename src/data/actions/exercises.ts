import actions from '../../common/actionTypes/exercises'
import {
    FetchExercisesSuccessData,
    FetchExercisesFailData,
    FetchExercises,
    FetchExercisesSuccess,
    FetchExercisesFail
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
