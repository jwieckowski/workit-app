import actions from '../../common/actionTypes/training'
import {
    StartTraining,
    StartTrainingPayload,
    FinishTraining,
    SetActiveExercise,
    SetActiveExerciseData,
    FetchTrainings,
    FetchTrainingsSuccess,
    FetchTrainingsFail,
    FetchTrainingsSuccessData,
    TrainingFailData,
    PostTraining,
    PostTrainingData,
    PostTrainingSuccess,
    PostTrainingFail,
    OpenActiveTrainingDialog,
    RedirectData,
    CloseActiveTrainingDialog,
    StartEditMode,
    AddTrainingSeries,
    AddTrainingSeriesData,
    EditTrainingSeries,
    EditTrainingSeriesData,
    DeleteTrainingSeries,
    DeleteTrainingSeriesData,
} from '../../common/types/training'

export const startTraining = (
    payload: StartTrainingPayload
): StartTraining => ({
    type: actions.START_TRAINING,
    payload
})

export const finishTraining = (): FinishTraining => ({
    type:  actions.FINISH_TRAINING
})

export const setActiveExercise = (
    payload: SetActiveExerciseData
) : SetActiveExercise => {
    return {
        type: actions.SET_ACTIVE_EXERCISE,
        payload
    }
}

export const fetchTrainings = (): FetchTrainings => ({
    type: actions.FETCH_TRAINING_DATA
})

export const fetchTrainingsSuccess = (
    payload: FetchTrainingsSuccessData,
): FetchTrainingsSuccess => {
    return {
        type: actions.FETCH_TRAINING_DATA_SUCCESS,
        payload
    }
}

export const fetchTrainingsFail = (
    payload: TrainingFailData
): FetchTrainingsFail => ({
    type: actions.FETCH_TRAINING_DATA_FAIL,
    payload
})

export const postTraining = (
    payload: PostTrainingData
): PostTraining => {
    return {
        type: actions.POST_TRAINING_DATA,
        payload
    }
}

export const postTrainingSuccess = (): PostTrainingSuccess => ({
    type: actions.POST_TRAINING_DATA_SUCCESS,
})

export const postTrainingFail = (
    payload: TrainingFailData
): PostTrainingFail => ({
    type: actions.POST_TRAINING_DATA_FAIL,
    payload
})

export const openActiveTrainingDialog = (
    payload: RedirectData
) : OpenActiveTrainingDialog => ({
    type: actions.OPEN_ACTIVE_TRAINING_DIALOG,
    payload
})

export const closeActiveTrainingDialog = () : CloseActiveTrainingDialog => ({
    type: actions.CLOSE_ACTIVE_TRAINING_DIALOG
})

export const startEditMode = () : StartEditMode => ({
    type: actions.START_EDIT_MODE
})

export const addTrainingSeries = (
    payload: AddTrainingSeriesData
): AddTrainingSeries => ({
    type: actions.ADD_TRAINING_SERIES,
    payload
})

export const editTrainingSeries = (
    payload: EditTrainingSeriesData
): EditTrainingSeries => ({
    type: actions.EDIT_TRAINING_SERIES,
    payload
})

export const deleteTrainingSeries = (
    payload: DeleteTrainingSeriesData
): DeleteTrainingSeries => ({
    type: actions.DELETE_TRAINING_SERIES,
    payload
})