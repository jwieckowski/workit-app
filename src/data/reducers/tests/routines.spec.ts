import reducer from '../routines'
import actions from '../../../common/actionTypes/routines'
import { AnyAction } from 'redux'
import {
    RoutinesState,
    RoutineItem,
    FetchRoutinesSuccessData,
    RoutinesFailData,
    PayloadRoutineData,
    ActiveRoutineID,
} from '../../../common/types/routines'
import {
    fetchRoutines,
    fetchRoutinesSuccess,
    fetchRoutinesFail,
    postRoutine,
    postRoutineSuccess,
    postRoutineFail,
    updateRoutine,
    updateRoutineSuccess,
    updateRoutineFail,
    deleteRoutine,
    deleteRoutineSuccess,
    deleteRoutineFail,
    setActiveRoutine,
    addRoutineExercise,
    deleteRoutineExercise,
    postRoutineExercises,
    postRoutineExercisesSuccess,
    postRoutineExercisesFail,
    openRoutineDialog,
    closeRoutineDialog,
    openTrainingDialog,
    closeTrainingDialog,
} from '../../actions/routines'

describe('routines reducer', () => {
  const initialState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: null,
    data: [],
    error: null,
    open: false,
    startTrainingOpen: false
  }

  const action: AnyAction = {
    type: ''
  }

  const testRoutineData: RoutineItem[] = [
      {
          _id: 1,
          name: "Routine",
          exercises: [
              { _id: 1},
              { _id: 2},
              { _id: 3},
          ]
      },
      {
          _id: 2,
          name: "Routine",
          exercises: [
              { _id: 1},
              { _id: 2},
              { _id: 3},
          ]
      }
  ]

  const testRoutinePayload: FetchRoutinesSuccessData = {
      data: testRoutineData
  }

  const testRoutineFail: RoutinesFailData = {
      error: 'Test error'
  }

  const testRoutineItem: RoutineItem = {
    _id: 1,
    name: "Routine",
    exercises: [
        { _id: 1},
        { _id: 2},
        { _id: 3},
    ]
  }

  const testAddRoutineExercisesItem: RoutineItem = {
    _id: 1,
    name: "Routine",
    exercises: [
        { _id: 1},
        { _id: 2},
        { _id: 3},
        { _id: 4},
    ]
  }

  const testActiveRoutine: ActiveRoutineID = {
      _id : 1
  }

  const testAddExercise: ActiveRoutineID = {
      _id : 4
  }

  const testRoutine: PayloadRoutineData = {
      item: testRoutineItem
  }

  const postState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: testRoutineItem,
    data: [],
    error: null,
    open: false,
    startTrainingOpen: false
  }

  const updateState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: testRoutineItem,
    data: [testRoutineItem],
    error: null,
    open: false,
    startTrainingOpen: false
  }

  const deleteState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: testRoutineItem,
    data: testRoutineData,
    error: null,
    open: false,
    startTrainingOpen: false
  }

  const modifyExerciseState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: testRoutineItem,
    data: [testAddRoutineExercisesItem],
    error: null,
    open: false,
    startTrainingOpen: false
  }

   const modifyDeleteExerciseState: RoutinesState = {
    posting: false,
    deleting: false,
    loading: false,
    updating: false,
    item: testAddRoutineExercisesItem,
    data: [testRoutineItem],
    error: null,
    open: false,
    startTrainingOpen: false
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should start fetching the routines data: ${actions.FETCH_ROUTINES}`, () => {
    expect(reducer(initialState, fetchRoutines())).toEqual({
      ...initialState,
      loading: true
    })
  })

  test(`should fetch the routines data successfully: ${actions.FETCH_ROUTINES_SUCCESS}`, () => {
    expect(reducer(initialState, fetchRoutinesSuccess(testRoutinePayload))).toEqual({
      ...initialState,
      loading: false,
      data: testRoutinePayload.data
    })
  })

  test(`should fail fetching and stop loading: ${actions.FETCH_ROUTINES_FAIL}`, () => {
    expect(reducer(initialState, fetchRoutinesFail(testRoutineFail))).toEqual({
      ...initialState,
      loading: false,
      error: testRoutineFail.error
    })
  })

  test(`should start posting the routine item: ${actions.POST_ROUTINE}`, () => {
    expect(reducer(postState, postRoutine(testRoutine))).toEqual({
      ...postState,
      posting: true,
      item: testRoutine.item
    })
  })

  test(`should post the routine item successfully: ${actions.POST_ROUTINE_SUCCESS}`, () => {
    expect(reducer(postState, postRoutineSuccess())).toEqual({
      ...postState,
      loading: false,
      data: [postState.item, ...postState.data],
      item: null
    })
  })

  test(`should fail posting routine item: ${actions.POST_ROUTINE_FAIL}`, () => {
    expect(reducer(postState, postRoutineFail(testRoutineFail))).toEqual({
      ...postState,
      loading: false,
      error: testRoutineFail.error,
      item: null
    })
  })

  test(`should start updating the routine item: ${actions.UPDATE_ROUTINE}`, () => {
    expect(reducer(updateState, updateRoutine(testRoutine))).toEqual({
      ...updateState,
      updating: true,
      item: testRoutine.item
    })
  })

  test(`should update the routine item successfully: ${actions.UPDATE_ROUTINE_SUCCESS}`, () => {
    expect(reducer(updateState, updateRoutineSuccess())).toEqual({
      ...updateState,
      updating: false,
      data: [...updateState.data.map(d => d._id === updateState?.item?._id ? updateState.item : d)],
      item: null
    })
  })

  test(`should fail updating routine item: ${actions.UPDATE_ROUTINE_FAIL}`, () => {
    expect(reducer(updateState, updateRoutineFail(testRoutineFail))).toEqual({
      ...updateState,
      updating: false,
      error: testRoutineFail.error,
      item: null
    })
  })

  test(`should start deleting the routine item: ${actions.DELETE_ROUTINE}`, () => {
    expect(reducer(deleteState, deleteRoutine(testRoutine))).toEqual({
      ...deleteState,
      deleting: true,
      item: testRoutine.item
    })
  })

  test(`should delete the routine item successfully: ${actions.DELETE_ROUTINE_SUCCESS}`, () => {
    expect(reducer(deleteState, deleteRoutineSuccess())).toEqual({
      ...deleteState,
      deleting: false,
      data: [...deleteState.data.filter(d => d._id !== deleteState.item?._id)],
      item: null
    })
  })

  test(`should fail deleting routine item: ${actions.DELETE_ROUTINE_FAIL}`, () => {
    expect(reducer(deleteState, deleteRoutineFail(testRoutineFail))).toEqual({
      ...deleteState,
      deleting: false,
      error: testRoutineFail.error,
      item: null
    })
  })

  test(`should set active routine id ${actions.SET_ACTIVE_ROUTINE}`, () => {
    expect(reducer(updateState, setActiveRoutine(testActiveRoutine))).toEqual({
      ...updateState,
      item: updateState.data.filter(d => d._id === testActiveRoutine._id)[0]
    })
  })

  test(`should add routine exercise ${actions.ADD_ROUTINE_EXERCISE}`, () => {
    expect(reducer(modifyExerciseState, addRoutineExercise(testAddExercise))).toEqual({
      ...modifyExerciseState,
        item: modifyExerciseState.item !== null ? {
            ...modifyExerciseState.item,
            exercises: [...modifyExerciseState.item?.exercises, { _id: testAddExercise._id}]
        }: modifyExerciseState.item
    })
  })

  test(`should delete routine exercise ${actions.DELETE_ROUTINE_EXERCISE}`, () => {
    expect(reducer(modifyDeleteExerciseState, deleteRoutineExercise(testAddExercise))).toEqual({
      ...modifyDeleteExerciseState,
        item: modifyDeleteExerciseState.item !== null ? {
            ...modifyDeleteExerciseState.item,
            exercises: modifyExerciseState.item?.exercises
        }: modifyExerciseState.item
    })
  })

  test(`should start posting routine exercises ${actions.POST_ROUTINE_EXERCISES}`, () => {
    expect(reducer(initialState, postRoutineExercises(testRoutine))).toEqual({
      ...initialState,
      posting: true,
      item: testRoutine.item
    })
  })

  test(`should post routine exercises successfully ${actions.POST_ROUTINE_EXERCISES_SUCCESS}`, () => {
    expect(reducer(updateState, postRoutineExercisesSuccess())).toEqual({
      ...updateState,
      posting: false,
      data: updateState?.item !== null ? [...updateState.data.map(d => d._id === updateState?.item?._id ? updateState.item : d)] : updateState.data,
      item: null
    })
  })

  test(`should fail to post routine exercises ${actions.POST_ROUTINE_EXERCISES_FAIL}`, () => {
    expect(reducer(initialState, postRoutineExercisesFail(testRoutineFail))).toEqual({
      ...initialState,
      posting: false,
      item: null,
      error: testRoutineFail.error
    })
  })

  test(`should open routine dialog ${actions.OPEN_ROUTINE_DIALOG}`, () => {
    expect(reducer(initialState, openRoutineDialog())).toEqual({
      ...initialState,
      open: true,
      updating: false,
      item: null
    })
  })

  test(`should close routine dialog ${actions.CLOSE_ROUTINE_DIALOG}`, () => {
    expect(reducer(initialState, closeRoutineDialog())).toEqual({
      ...initialState,
      open: false,
      item: null,
      updating: false
    })
  })

  test(`should open start training dialog ${actions.OPEN_TRAINING_DIALOG}`, () => {
    expect(reducer(initialState, openTrainingDialog())).toEqual({
      ...initialState,
      startTrainingOpen: true
    })
  })

  test(`should close start training dialog ${actions.CLOSE_TRAINING_DIALOG}`, () => {
    expect(reducer(initialState, closeTrainingDialog())).toEqual({
      ...initialState,
      startTrainingOpen: false
    })
  })
})
