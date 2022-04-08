import actions from '../../common/actionTypes/body'
import {
    FetchBody,
    FetchBodySuccess,
    FetchBodyFail,
    FetchBodySuccessData,
    BodyFailData,
    PostBody,
    PostBodySuccess,
    PostBodyFail,
    PostBodyData
} from '../../common/types/body'

export const fetchBody = (): FetchBody => ({
    type: actions.FETCH_BODY_DATA
})

export const fetchBodySuccess = (
    payload: FetchBodySuccessData,
): FetchBodySuccess => {
    return {
        type: actions.FETCH_BODY_DATA_SUCCESS,
        payload
    }
}

export const fetchBodyFail = (
    payload: BodyFailData
): FetchBodyFail => ({
    type: actions.FETCH_BODY_DATA_FAIL,
    payload
})

export const postBody = (
    payload: PostBodyData
): PostBody => ({
    type: actions.POST_BODY_DATA,
    payload
})

export const postBodySuccess = (): PostBodySuccess => ({
    type: actions.POST_BODY_DATA_SUCCESS,
})

export const postBodyFail = (
    payload: BodyFailData
): PostBodyFail => ({
    type: actions.POST_BODY_DATA_FAIL,
    payload
})
