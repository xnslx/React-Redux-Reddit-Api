import * as actionsType from '../Action/Action';
import {combineReducers} from 'redux';
 

const selectedSort = (state = 'relevance', action) => {
    switch(action.type) {
        case actionsType.SELECT_SORT:
            return action.sortOption
        default:
            return state
    }
}

const selectedLimit = (state = '5', action) => {
    switch(action.type) {
        case actionsType.SELECT_LIMIT:
            return action.limitOption
        default:
            return state
    }
}

const initialState = {
    posts: [],
    loading:false,
    hasError:false,
    query:'',
    sortValue:['relevance', 'hot', 'top', 'new'],
    limitValue:['5', '10','15', '20']
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionsType.REQUEST_POSTS:
            return {
                ...state,
                loading:true,
                hasError:false
            }
        case actionsType.GET_POSTS_SUCCESS:
            return {
                posts:action.posts,
                loading:false,
                hasError:false
            }
        case actionsType.GET_POSTS_FAIL:
            return {
                ...state,
                loading:false,
                hasError:true
            }
        default:
            return state
    }
};

const rootReducer = combineReducers({
    selectedSort,
    selectedLimit,
    postReducer
})

export default rootReducer;