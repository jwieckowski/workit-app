import actions from '../../common/actionTypes/favorites'
import { AnyAction, Reducer } from 'redux'
import { FavoritesState } from '../../common/types/favorites'

const initialState: FavoritesState = {
    posting: false,
    deleting: false,
    item: null,
    loading: false,
    data: [],
    error: null,
}

const favorites: Reducer<FavoritesState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case actions.FETCH_FAVORITES:
            return {
                ...state,
                loading: true
            };
        case actions.FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                error: null
            }
        case actions.FETCH_FAVORITES_FAIL:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload.error
            }
        case actions.POST_FAVORITE:
            return {
                ...state,
                posting: true,
                item: action.payload.item
            };
        case actions.POST_FAVORITE_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state?.item ? [state.item, ...state.data] : state.data,
                item: null,
                error: null
            }
        case actions.POST_FAVORITE_FAIL:
            return {
                ...state,
                posting: false,
                item: null,
                data: state.data,
                error: action.payload.error
            }
        case actions.DELETE_FAVORITE:
            return {
                ...state,
                posting: true,
                item: action.payload.item
            };
        case actions.DELETE_FAVORITE_SUCCESS:
            return {
                ...state,
                posting: false,
                data: state?.item ? [...state.data.filter(d => d._id !== state.item?._id)] : state.data,
                item: null,
                error: null
            }
        case actions.DELETE_FAVORITE_FAIL:
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

export default favorites