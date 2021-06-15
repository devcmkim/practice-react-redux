import {FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE} from './types'

const initalState = {
    items: [],
    loading:false,
    err:null
}
const commentsReducer = (state=initalState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading:false
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items:action.payload,
            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                err:action.payload,
                loading:false,
            }
        default: return state;

    }
}
export default commentsReducer