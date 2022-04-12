import actions from '../../common/actionTypes/routines'
import {
    FetchRoutines,
    FetchRoutinesSuccess,
    FetchRoutinesFail,
    FetchRoutinesSuccessData,
    RoutinesFailData,
    PostRoutine,
    PostRoutineSuccess,
    PostRoutineFail,
    UpdateRoutine,
    UpdateRoutineSuccess,
    UpdateRoutineFail,
    PayloadRoutineData,
    PayloadUpdateRoutine,
    DeleteRoutine,
    DeleteRoutineSuccess,
    DeleteRoutineFail,
    SetActiveRoutine,
    ActiveRoutineID,
    AddRoutineExercise,
    DeleteRoutineExercise,
    PostRoutineExercises,
    PostRoutineExercisesSuccess,
    PostRoutineExercisesFail,
    OpenRoutineDialog,
    CloseRoutineDialog,
} from '../../common/types/routines'

export const fetchRoutines = (): FetchRoutines => ({
    type: actions.FETCH_ROUTINES
})

export const fetchRoutinesSuccess = (
    payload: FetchRoutinesSuccessData,
): FetchRoutinesSuccess => {
    return {
        type: actions.FETCH_ROUTINES_SUCCESS,
        payload
    }
}

export const fetchRoutinesFail = (
    payload: RoutinesFailData
): FetchRoutinesFail => ({
    type: actions.FETCH_ROUTINES_FAIL,
    payload
})

export const postRoutine = (
    payload: PayloadRoutineData
): PostRoutine => ({
    type: actions.POST_ROUTINE,
    payload
})

export const postRoutineSuccess = (): PostRoutineSuccess => ({
    type: actions.POST_ROUTINE_SUCCESS,
})

export const postRoutineFail = (
    payload: RoutinesFailData
): PostRoutineFail => ({
    type: actions.POST_ROUTINE_FAIL,
    payload
})

export const updateRoutine = (
    payload: PayloadRoutineData
): UpdateRoutine => ({
    type: actions.UPDATE_ROUTINE,
    payload
})

export const updateRoutineSuccess = (): UpdateRoutineSuccess => ({
    type: actions.UPDATE_ROUTINE_SUCCESS,
})

export const updateRoutineFail = (
    payload: RoutinesFailData
): UpdateRoutineFail => ({
    type: actions.UPDATE_ROUTINE_FAIL,
    payload
})

export const deleteRoutine = (
    payload: PayloadRoutineData
): DeleteRoutine => ({
    type: actions.DELETE_ROUTINE,
    payload
})

export const deleteRoutineSuccess = (): DeleteRoutineSuccess => ({
    type: actions.DELETE_ROUTINE_SUCCESS,
})

export const deleteRoutineFail = (
    payload: RoutinesFailData
): DeleteRoutineFail => ({
    type: actions.DELETE_ROUTINE_FAIL,
    payload
})

export const setActiveRoutine = (
    payload: ActiveRoutineID
): SetActiveRoutine => ({
    type: actions.SET_ACTIVE_ROUTINE,
    payload
})

export const addRoutineExercise = (
    payload: ActiveRoutineID
): AddRoutineExercise => ({
    type: actions.ADD_ROUTINE_EXERCISE,
    payload
})

export const deleteRoutineExercise = (
    payload: ActiveRoutineID
): DeleteRoutineExercise => ({
    type: actions.DELETE_ROUTINE_EXERCISE,
    payload
})

export const postRoutineExercises = (
    payload: PayloadRoutineData
): PostRoutineExercises => ({
    type: actions.POST_ROUTINE_EXERCISES,
    payload
})

export const postRoutineExercisesSuccess = (): PostRoutineExercisesSuccess => ({
    type: actions.POST_ROUTINE_EXERCISES_SUCCESS,
})

export const postRoutineExercisesFail = (
    payload: RoutinesFailData
): PostRoutineExercisesFail => ({
    type: actions.POST_ROUTINE_EXERCISES_FAIL,
    payload
})

export const openRoutineDialog = (
    payload?: PayloadUpdateRoutine
): OpenRoutineDialog => ({
    type: actions.OPEN_ROUTINE_DIALOG,
    payload
})

export const closeRoutineDialog = (): CloseRoutineDialog => ({
    type: actions.CLOSE_ROUTINE_DIALOG
})
