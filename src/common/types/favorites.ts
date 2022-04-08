import actions from '../actionTypes/favorites'

export interface FavoriteItem {
    _id: number
}

export interface FavoritesState {
    posting: boolean,
    deleting: boolean,
    item: FavoriteItem | null,
    loading: boolean,
    data: FavoriteItem[] | [],
    error: string | null,
}

export interface FetchFavoritesSuccessData {
    data: FavoriteItem[],
}

export interface FavoritesFailData {
    error: string
}

export interface FetchFavorites {
    type: typeof actions.FETCH_FAVORITES
}

export interface PayloadFavoriteData {
    item: FavoriteItem
}

export interface FetchFavoritesSuccess {
    type: typeof actions.FETCH_FAVORITES_SUCCESS,
    payload: FetchFavoritesSuccessData
}

export interface FetchFavoritesFail {
    type: typeof actions.FETCH_FAVORITES_FAIL,
    payload: FavoritesFailData
}

export interface PostFavorite {
    type: typeof actions.POST_FAVORITE,
    payload: PayloadFavoriteData
}

export interface PostFavoriteSuccess {
    type: typeof actions.POST_FAVORITE_SUCCESS
}

export interface PostFavoriteFail {
    type: typeof actions.POST_FAVORITE_FAIL,
    payload: FavoritesFailData
}

export interface DeleteFavorite {
    type: typeof actions.DELETE_FAVORITE,
    payload: PayloadFavoriteData
}

export interface DeleteFavoriteSuccess {
    type: typeof actions.DELETE_FAVORITE_SUCCESS
}

export interface DeleteFavoriteFail {
    type: typeof actions.DELETE_FAVORITE_FAIL,
    payload: FavoritesFailData
}
