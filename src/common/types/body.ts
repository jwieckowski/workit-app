import actions from '../actionTypes/body'

export interface BodyItem {
    _id: number,
    date: string,
    weight: number
}

export interface BodyState {
    posting: boolean,
    item: BodyItem | null,
    loading: boolean,
    data: BodyItem[] | [],
    error: string | null,
}

export interface FetchBodySuccessData {
    data: BodyItem[],
}

export interface BodyFailData {
    error: string
}

export interface FetchBody {
    type: typeof actions.FETCH_BODY_DATA
}

export interface PostBodyData {
    item: BodyItem
}

export interface FetchBodySuccess {
    type: typeof actions.FETCH_BODY_DATA_SUCCESS,
    payload: FetchBodySuccessData
}

export interface FetchBodyFail {
    type: typeof actions.FETCH_BODY_DATA_FAIL,
    payload: BodyFailData
}

export interface PostBody {
    type: typeof actions.POST_BODY_DATA,
    payload: PostBodyData
}

export interface PostBodySuccess {
    type: typeof actions.POST_BODY_DATA_SUCCESS
}

export interface PostBodyFail {
    type: typeof actions.POST_BODY_DATA_FAIL,
    payload: BodyFailData
}
