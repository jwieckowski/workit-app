import reducer from '../exercises'
import actions from '../../../common/actionTypes/exercises'
import { AnyAction } from 'redux'
import {
    ExercisesState,
    ExercisesList,
    FetchExercisesSuccessData,
    FetchExercisesFailData,
} from '../../../common/types/exercises'
import {
    fetchExercises,
    fetchExercisesSuccess,
    fetchExercisesFail,
    openRoutineExercises,
    closeRoutineExercises
} from '../../actions/exercises'

describe('exercises reducer', () => {
  const initialState: ExercisesState = {
    loading: false,
    data: {'key': []},
    error: null,
    openForRoutine: false
  }

  const testExercisesData: ExercisesList = {
      "Chest": [
          {
              "_id": 1,
              "name": "Exercise name",
              "type": "Chest"
          },
          {
              "_id": 2,
              "name": "Exercise name",
              "type": "Chest"
          },
          {
              "_id": 3,
              "name": "Exercise name",
              "type": "Chest"
          },
      ],
      "Back": [
          {
              "_id": 1,
              "name": "Exercise name",
              "type": "Back"
          },
          {
              "_id": 2,
              "name": "Exercise name",
              "type": "Back"
          },
          {
              "_id": 3,
              "name": "Exercise name",
              "type": "Back"
          },
      ]
  }

  const testDataPayload: FetchExercisesSuccessData = {
      data: testExercisesData
  }

  const testDataFailPayload: FetchExercisesFailData = {
      error: "Test error"
  }

  const action: AnyAction = {
    type: ''
  }

  test('should return the initial state', () => {
    expect(reducer(initialState, action)).toEqual(initialState)
  })

  test(`should start fetching the exercises data: ${actions.FETCH_EXERCISES}`, () => {
    expect(reducer(initialState, fetchExercises())).toEqual({
      ...initialState,
      loading: true
    })
  })

  test(`should fetch data exercise: ${actions.FETCH_EXERCISES_SUCCESS}`, () => {
    expect(reducer(initialState, fetchExercisesSuccess(testDataPayload))).toEqual({
      ...initialState,
      loading: false,
      data: testDataPayload.data
    })
  })

  test(`should fail fetching data and stop loading: ${actions.FETCH_EXERCISES_FAIL}`, () => {
    expect(reducer(initialState, fetchExercisesFail(testDataFailPayload))).toEqual({
      ...initialState,
      loading: false,
      error: testDataFailPayload.error
    })
  })

   test(`should set the flag of setting exercises to true: ${actions.OPEN_ROUTINE_EXERCISES}`, () => {
    expect(reducer(initialState, openRoutineExercises())).toEqual({
      ...initialState,
      openForRoutine: true
    })
  })

  test(`should set the flag of setting exercises to false: ${actions.CLOSE_ROUTINE_EXERCISES}`, () => {
    expect(reducer(initialState, closeRoutineExercises())).toEqual({
      ...initialState,
      openForRoutine: false
    })
  })
})
