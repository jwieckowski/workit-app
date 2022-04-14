import actions from '../actionTypes/routines'

export interface ExerciseItem {
  _id: number
}

export interface RoutineItem {
    _id: number,
    name: string,
    exercises: ExerciseItem[] | []
}

export interface RoutinesState {
    posting: boolean,
    deleting: boolean,
    loading: boolean,
    updating: boolean,
    item: RoutineItem | null,
    data: RoutineItem[] | [],
    error: string | null,
    open: boolean,
    startTrainingOpen: boolean,
}

export interface FetchRoutinesSuccessData {
   data: RoutineItem[]
}

export interface RoutinesFailData {
    error: string
}

export interface FetchRoutines {
    type: typeof actions.FETCH_ROUTINES
}

export interface PayloadRoutineData {
    item: RoutineItem
}

export interface PayloadUpdateRoutine {
    updating?: boolean,
    _id?: number
}

export interface ActiveRoutineID {
    _id: number | null
}

export interface FetchRoutinesSuccess {
    type: typeof actions.FETCH_ROUTINES_SUCCESS,
    payload: FetchRoutinesSuccessData
}

export interface FetchRoutinesFail {
    type: typeof actions.FETCH_ROUTINES_FAIL,
    payload: RoutinesFailData
}

export interface PostRoutine {
    type: typeof actions.POST_ROUTINE,
    payload: PayloadRoutineData
}

export interface PostRoutineSuccess {
    type: typeof actions.POST_ROUTINE_SUCCESS
}

export interface PostRoutineFail {
    type: typeof actions.POST_ROUTINE_FAIL,
    payload: RoutinesFailData
}

export interface UpdateRoutine {
    type: typeof actions.UPDATE_ROUTINE,
    payload: PayloadRoutineData
}

export interface UpdateRoutineSuccess {
    type: typeof actions.UPDATE_ROUTINE_SUCCESS
}

export interface UpdateRoutineFail {
    type: typeof actions.UPDATE_ROUTINE_FAIL,
    payload: RoutinesFailData
}

export interface DeleteRoutine {
    type: typeof actions.DELETE_ROUTINE,
    payload: PayloadRoutineData
}

export interface DeleteRoutineSuccess {
    type: typeof actions.DELETE_ROUTINE_SUCCESS
}

export interface DeleteRoutineFail {
    type: typeof actions.DELETE_ROUTINE_FAIL,
    payload: RoutinesFailData
}

export interface SetActiveRoutine {
    type: typeof actions.SET_ACTIVE_ROUTINE,
    payload: ActiveRoutineID
}

export interface AddRoutineExercise {
    type: typeof actions.ADD_ROUTINE_EXERCISE,
    payload: ActiveRoutineID
}

export interface DeleteRoutineExercise {
    type: typeof actions.DELETE_ROUTINE_EXERCISE,
    payload: ActiveRoutineID
}

export interface PostRoutineExercises {
    type: typeof actions.POST_ROUTINE_EXERCISES,
    payload: PayloadRoutineData
}

export interface PostRoutineExercisesSuccess {
    type: typeof actions.POST_ROUTINE_EXERCISES_SUCCESS,
}

export interface PostRoutineExercisesFail {
    type: typeof actions.POST_ROUTINE_EXERCISES_FAIL,
    payload: RoutinesFailData
}

export interface OpenRoutineDialog {
    type: typeof actions.OPEN_ROUTINE_DIALOG,
    payload?: PayloadUpdateRoutine
}

export interface CloseRoutineDialog {
    type: typeof actions.CLOSE_ROUTINE_DIALOG,
}

export interface OpenTrainingDialog {
    type: typeof actions.OPEN_TRAINING_DIALOG,
}

export interface CloseTrainingDialog {
    type: typeof actions.CLOSE_TRAINING_DIALOG,
}