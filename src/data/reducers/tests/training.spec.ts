import reducer from '../training'
import actions from '../../../common/actionTypes/training'
import { AnyAction } from 'redux'
import {
    TrainingState,
    TrainingDataItem,
    TrainingSeriesItem,
    StartTrainingPayload,
    SetActiveExerciseData,
    PostTrainingData,
    StartTrainingDataItem,
    FetchTrainingsSuccessData,
    TrainingFailData,
    RedirectData,
    AddTrainingSeriesData,
    EditTrainingSeriesData,
    DeleteTrainingSeriesData
} from '../../../common/types/training'
import {
    startTraining,
    finishTraining,
    setActiveExercise,
    fetchTrainings,
    fetchTrainingsSuccess,
    fetchTrainingsFail,
    postTraining,
    postTrainingSuccess,
    postTrainingFail,
    openActiveTrainingDialog,
    closeActiveTrainingDialog,
    startEditMode,
    addTrainingSeries,
    editTrainingSeries,
    deleteTrainingSeries
} from '../../actions/training'

describe('training reducer', () => {
  const initialState: TrainingState = {
    active: false,
    open: false,
    url: '',
    exerciseID: null,
    time: 0,
    loading: false,
    posting: false,
    editMode: false,
    data: [],
    item: null,
    error: null
  }

  const action: AnyAction = {
    type: ''
  }

  const testTrainingSeries: TrainingSeriesItem = {
        exerciseID: 1,
        data: [
            {
                weights: 10,
                reps: 10
            }
        ]
    }

  const testStartTrainingData: StartTrainingDataItem = {
      date: '2022-04-12',
      routineID: 1,
      trainingSeries: [testTrainingSeries]
  }

  const startTrainingPayload: StartTrainingPayload = {
      item: testStartTrainingData,
      exerciseID: 1
  }


  const testTrainingData: TrainingDataItem = {
      _id: 1,
      date: '2022-04-10',
      routineID: 1,
      trainingSeries: [testTrainingSeries]
    }

  const testPostTrainingPayload: PostTrainingData = {
      item: testTrainingData
  }

  const testActiveExercise: SetActiveExerciseData = {
      exerciseID: 1
  }

  const testTrainingPayload: FetchTrainingsSuccessData = {
      data: [testTrainingData]
  }

  const testTrainingFail: TrainingFailData = {
      error: 'Test error'
  }

  const postState: TrainingState = {
    active: false,
    open: false,
    url: '',
    exerciseID: null,
    time: 0,
    loading: false,
    posting: false,
    editMode: false,
    data: [testTrainingData],
    item: testTrainingData,
    error: null
  }

  const testAddSeries: AddTrainingSeriesData = {
    exerciseID: 1,
    weights: 10,
    reps: 11
  }

  const testAddTrainingSeries: TrainingSeriesItem = {
      exerciseID: 1,
      data: [
          {
              weights: 10,
              reps: 10
          },
          {
              weights: 10,
              reps: 11
          },

      ]
  }

  const testAddTrainingData: TrainingDataItem = {
      _id: 1,
      date: '2022-04-10',
      routineID: 1,
      trainingSeries: [testAddTrainingSeries]
    }

  const addSeriesState: TrainingState = {
    ...postState,
    data: [testAddTrainingData],
    item: testTrainingData
  }

  const testEditSeries: EditTrainingSeriesData = {
    exerciseID: 1,
    series: 1,
    weights: 10,
    reps: 11
  }

  const testEditTrainingSeries: TrainingSeriesItem = {
      exerciseID: 1,
      data: [
          {
              weights: 10,
              reps: 11
          },

      ]
  }

  const testEditTrainingData: TrainingDataItem = {
      _id: 1,
      date: '2022-04-10',
      routineID: 1,
      trainingSeries: [testEditTrainingSeries]
    }

  const editSeriesState: TrainingState = {
    ...postState,
    data: [testEditTrainingData],
    item: testTrainingData
  }

  const testDeleteSeries: DeleteTrainingSeriesData = {
    exerciseID: 1,
    series: 1
  }

  const testDeleteTrainingSeries: TrainingSeriesItem = {
      exerciseID: 1,
      data: []
  }

  const testDeleteTrainingData: TrainingDataItem = {
      _id: 1,
      date: '2022-04-10',
      routineID: 1,
      trainingSeries: [testDeleteTrainingSeries]
  }

  const deleteSeriesState: TrainingState = {
    ...postState,
    data: [testDeleteTrainingData],
    item: testTrainingData
  }

  const testOpenTrainingDialog: RedirectData = {
    url: 'test url'
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should start fetching the trainings data: ${actions.START_TRAINING}`, () => {
    expect(reducer(initialState, startTraining(startTrainingPayload))).toEqual({
      ...initialState,
      active: true,
      item: {
        ...startTrainingPayload.item,
        _id: initialState.data.length + 1
      },
      exerciseID: startTrainingPayload.exerciseID
    })
  })

  test(`should start fetching the trainings data: ${actions.FINISH_TRAINING}`, () => {
    expect(reducer(initialState, finishTraining())).toEqual({
      ...initialState,
      active: false,
      exerciseID: null
    })
  })

  test(`should start fetching the trainings data: ${actions.SET_ACTIVE_EXERCISE}`, () => {
    expect(reducer(initialState, setActiveExercise(testActiveExercise))).toEqual({
      ...initialState,
      exerciseID: testActiveExercise.exerciseID !== null ? testActiveExercise.exerciseID : null
    })
  })

  test(`should start fetching the trainings data: ${actions.FETCH_TRAINING_DATA}`, () => {
    expect(reducer(initialState, fetchTrainings())).toEqual({
      ...initialState,
      loading: true
    })
  })

  test(`should fetch the trainings data successfully: ${actions.FETCH_TRAINING_DATA_SUCCESS}`, () => {
    expect(reducer(initialState, fetchTrainingsSuccess(testTrainingPayload))).toEqual({
      ...initialState,
      loading: false,
      data: testTrainingPayload.data
    })
  })

  test(`should fail fetching and stop loading: ${actions.FETCH_TRAINING_DATA_FAIL}`, () => {
    expect(reducer(initialState, fetchTrainingsFail(testTrainingFail))).toEqual({
      ...initialState,
      loading: false,
      error: testTrainingFail.error
    })
  })

  test(`should start posting training: ${actions.POST_TRAINING_DATA}`, () => {
    expect(reducer(initialState, postTraining(testPostTrainingPayload))).toEqual({
      ...initialState,
      posting: true
    })
  })

  test(`should post training successfully: ${actions.POST_TRAINING_DATA_SUCCESS}`, () => {
    expect(reducer(postState, postTrainingSuccess())).toEqual({
      ...postState,
      posting: false,
      data: postState?.item ? [postState.item, ...postState.data] : postState.data,
      item: null,
    })
  })

  test(`should fail and not post training: ${actions.POST_TRAINING_DATA_FAIL}`, () => {
    expect(reducer(initialState, postTrainingFail(testTrainingFail))).toEqual({
      ...initialState,
      posting: false,
      item: null,
      error: testTrainingFail.error
    })
  })

  test(`should open active training dialog: ${actions.OPEN_ACTIVE_TRAINING_DIALOG}`, () => {
    expect(reducer(initialState, openActiveTrainingDialog(testOpenTrainingDialog))).toEqual({
      ...initialState,
      open: true,
      url: testOpenTrainingDialog.url
    })
  })

  test(`should close active training dialog: ${actions.CLOSE_ACTIVE_TRAINING_DIALOG}`, () => {
    expect(reducer(initialState, closeActiveTrainingDialog())).toEqual({
      ...initialState,
      open: false,
      url: '',
      item: null,
    })
  })

  test(`should activate edit mode: ${actions.START_EDIT_MODE}`, () => {
    expect(reducer(initialState, startEditMode())).toEqual({
      ...initialState,
      editMode: true
    })
  })

   test(`should add new training series: ${actions.ADD_TRAINING_SERIES}`, () => {
    expect(reducer(addSeriesState, addTrainingSeries(testAddSeries))).toEqual({
      ...addSeriesState,
      item: addSeriesState.item !== null ? {
          ...addSeriesState.item,
          trainingSeries: addSeriesState.item.trainingSeries.filter(s => s.exerciseID === testAddSeries.exerciseID).length > 0
              ? [...addSeriesState.item.trainingSeries.map(s => {
                  return {
                      ...s,
                      data: s.exerciseID === testAddSeries.exerciseID
                          ? [...s.data,  {weights: testAddSeries.weights, reps: testAddSeries.reps}]
                          : s.data
                  }
              })]
              : [...addSeriesState.item.trainingSeries, { exerciseID: testAddSeries.exerciseID, data: [{ weights: testAddSeries.weights, reps: testAddSeries.reps}]}]
      } : addSeriesState.item
    })
  })

   test(`should edit existing training series: ${actions.EDIT_TRAINING_SERIES}`, () => {
    expect(reducer(editSeriesState, editTrainingSeries(testEditSeries))).toEqual({
      ...editSeriesState,
      editMode: false,
      item: editSeriesState.item !== null ? {
          ...editSeriesState.item,
          trainingSeries: editSeriesState.item.trainingSeries.filter(s => s.exerciseID === testEditSeries.exerciseID).length > 0
              ? [...editSeriesState.item.trainingSeries.map(s => {
                  return {
                      ...s,
                      data: s.exerciseID === testEditSeries.exerciseID
                          ? s.data.length > testEditSeries.series - 1
                              ? [...s.data.map((serie, idx) => {
                                  return idx === testEditSeries.series - 1
                                      ? {
                                          weights: testEditSeries.weights,
                                          reps: testEditSeries.reps
                                      }
                                      : serie
                              })]
                              : s.data
                          : s.data
                  }
              })]
              : editSeriesState.item.trainingSeries
      } : editSeriesState.item
    })
  })

   test(`should delete selected training series: ${actions.DELETE_TRAINING_SERIES}`, () => {
    expect(reducer(deleteSeriesState, deleteTrainingSeries(testDeleteSeries))).toEqual({
      ...deleteSeriesState,
      editMode: false,
      item: deleteSeriesState.item !== null ? {
          ...deleteSeriesState.item,
          trainingSeries: deleteSeriesState.item.trainingSeries.filter(s => s.exerciseID === testDeleteSeries.exerciseID).length > 0
              ? [...deleteSeriesState.item.trainingSeries.map(s => {
                  return {
                      ...s,
                      data: s.exerciseID === testDeleteSeries.exerciseID
                          ? s.data.length > testDeleteSeries.series - 1
                              ? [...s.data.filter((_, idx) => idx !== testDeleteSeries.series - 1)]
                              : s.data
                          : s.data
                  }
              })]
              : deleteSeriesState.item.trainingSeries
      } : deleteSeriesState.item
    })
  })
})
