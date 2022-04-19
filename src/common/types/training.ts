import actions from '../actionTypes/training'

export interface TrainingSetItem {
    weights: number,
    reps: number
}

export interface TrainingSeriesItem {
    exerciseID: number,
    data: TrainingSetItem[] | []
}

export interface TrainingDataItem {
    _id: number,
    date: string,
    trainingSeries: TrainingSeriesItem[] | [],
    routineID: number
}
export interface StartTrainingDataItem {
    date: string,
    trainingSeries: TrainingSeriesItem[] | [],
    routineID: number,
}

export interface TrainingState {
    active: boolean,
    open: boolean,
    url: string,
    exerciseID: number | null,
    time: number,
    loading: boolean,
    posting: boolean,
    editMode: boolean,
    data: TrainingDataItem[] | [],
    item: TrainingDataItem | null,
    error: string | null
}

export interface FetchTrainingsSuccessData {
    data: TrainingDataItem[]
}

export interface TrainingFailData {
    error: string
}

export interface PayloadTrainingData {
    trainingSeries: TrainingDataItem
}

export interface StartTrainingPayload {
    item: StartTrainingDataItem,
    exerciseID: number
}

export interface PostTrainingData {
    item: TrainingDataItem
}

export interface RedirectData {
    url: string
}

export interface SetActiveExerciseData {
    exerciseID: number | null | undefined
}

export interface AddTrainingSeriesData {
    exerciseID: number,
    weights: number,
    reps: number
}

export interface EditTrainingSeriesData {
    exerciseID: number,
    series: number,
    weights: number,
    reps: number
}

export interface DeleteTrainingSeriesData {
    exerciseID: number,
    series: number
}

export type StartTraining = {
    type: typeof actions.START_TRAINING,
    payload: StartTrainingPayload
}

export type FinishTraining = {
    type: typeof actions.FINISH_TRAINING
}

export interface SetActiveExercise {
    type: typeof actions.SET_ACTIVE_EXERCISE,
    payload: SetActiveExerciseData
}

export interface FetchTrainings {
    type: typeof actions.FETCH_TRAINING_DATA
}

export interface FetchTrainingsSuccess {
    type: typeof actions.FETCH_TRAINING_DATA_SUCCESS,
    payload: FetchTrainingsSuccessData
}

export interface FetchTrainingsFail {
    type: typeof actions.FETCH_TRAINING_DATA_FAIL,
    payload: TrainingFailData
}

export interface PostTraining {
    type: typeof actions.POST_TRAINING_DATA,
    payload: PostTrainingData
}

export interface PostTrainingSuccess {
    type: typeof actions.POST_TRAINING_DATA_SUCCESS
}

export interface PostTrainingFail {
    type: typeof actions.POST_TRAINING_DATA_FAIL,
    payload: TrainingFailData
}
export interface OpenActiveTrainingDialog {
    type: typeof actions.OPEN_ACTIVE_TRAINING_DIALOG,
    payload: RedirectData
}
export interface CloseActiveTrainingDialog {
    type: typeof actions.CLOSE_ACTIVE_TRAINING_DIALOG
}

export interface StartEditMode {
    type: typeof actions.START_EDIT_MODE
}
export interface AddTrainingSeries {
    type: typeof actions.ADD_TRAINING_SERIES,
    payload: AddTrainingSeriesData
}
export interface EditTrainingSeries {
    type: typeof actions.EDIT_TRAINING_SERIES,
    payload: EditTrainingSeriesData
}
export interface DeleteTrainingSeries {
    type: typeof actions.DELETE_TRAINING_SERIES,
    payload: DeleteTrainingSeriesData
}
