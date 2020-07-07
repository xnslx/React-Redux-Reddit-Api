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
                ...state,
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

const sort = (state ={},action) => {
    switch(action.type) {
        case actionsType.GET_POSTS_SUCCESS:
        case actionsType.REQUEST_POSTS:
            return {
                ...state,
                [action.sortOption]: state.posts(state[action.sortOption], action)
            }
        default:
            return state
    }
}

const limit = (state={},action) => {
    switch(action.type) {
        case actionsType.GET_POSTS_SUCCESS:
        case actionsType.REQUEST_POSTS:
            return {
                ...state,
                [action.limitOption]: state.posts(state[action.limitOption], action)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    sort,
    limit,
    selectedSort,
    selectedLimit,
    postReducer
})

export default rootReducer;