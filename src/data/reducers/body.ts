import actions from '../../common/actionTypes/body'
import { AnyAction, Reducer } from 'redux'
import { BodyState } from '../../common/types/body'

const initialState: BodyState = {
    posting: false,
    item: null,
    loading: false,
    data: [],
    error: null
}

const body: Reducer<BodyState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.FETCH_BODY_DATA:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_BODY_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null
            }
        case actions.FETCH_BODY_DATA_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload.error
            }
        case actions.POST_BODY_DATA:
            return {
                ...state,
                posting: true,
                item: action.payload.item
            };
        case actions.POST_BODY_DATA_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state.item !== null
                    ?
                    state.data.filter(d => d.date === state?.item?.date).length !== 0
                        ? [...state.data.map(d => {
                            return state.item !== null && d._id === state.item._id
                                ? state.item : d
                        })]
                        : [state.item, ...state.data]
                    : state.data,
                item: null,
                error: null
            }
        case actions.POST_BODY_DATA_FAIL:
            return {
                ...state,
                posting: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}

export default body