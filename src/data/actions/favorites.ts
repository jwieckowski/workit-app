import actions from '../../common/actionTypes/favorites'
import {
    FetchFavorites,
    FetchFavoritesSuccess,
    FetchFavoritesFail,
    FetchFavoritesSuccessData,
    FavoritesFailData,
    PostFavorite,
    PostFavoriteSuccess,
    PostFavoriteFail,
    PayloadFavoriteData,
    DeleteFavorite,
    DeleteFavoriteSuccess,
    DeleteFavoriteFail
} from '../../common/types/favorites'

export const fetchFavorites = (): FetchFavorites => ({
    type: actions.FETCH_FAVORITES
})

export const fetchFavoritesSuccess = (
    payload: FetchFavoritesSuccessData,
): FetchFavoritesSuccess => {
    return {
        type: actions.FETCH_FAVORITES_SUCCESS,
        payload
    }
}

export const fetchFavoritesFail = (
    payload: FavoritesFailData
): FetchFavoritesFail => ({
    type: actions.FETCH_FAVORITES_FAIL,
    payload
})

export const postFavorite = (
    payload: PayloadFavoriteData
): PostFavorite => ({
    type: actions.POST_FAVORITE,
    payload
})

export const postFavoriteSuccess = (): PostFavoriteSuccess => ({
    type: actions.POST_FAVORITE_SUCCESS,
})

export const postFavoriteFail = (
    payload: FavoritesFailData
): PostFavoriteFail => ({
    type: actions.POST_FAVORITE_FAIL,
    payload
})

export const deleteFavorite = (
    payload: PayloadFavoriteData
): DeleteFavorite => ({
    type: actions.DELETE_FAVORITE,
    payload
})

export const deleteFavoriteSuccess = (): DeleteFavoriteSuccess => ({
    type: actions.DELETE_FAVORITE_SUCCESS,
})

export const deleteFavoriteFail = (
    payload: FavoritesFailData
): DeleteFavoriteFail => ({
    type: actions.DELETE_FAVORITE_FAIL,
    payload
})

