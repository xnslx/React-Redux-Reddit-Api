import * as actionsType from '../Action/Action';
import {combineReducers} from 'redux';
 
const sortInitialState = {
    sortSelection: ['relevance', 'hot', 'top', 'new' ],
    selectedSortOption: []
}

const selectedSort = (state = sortInitialState, action) => {
    switch(action.type) {
        case actionsType.SELECT_SORT:
            return {
                ...state,
                selectedSortOption:state.selectedSortOption.push(action.sortOption)
            }
        default:
            return state
    }
}

const limitInitialState = {
    limitSelection: ['5', '10', '15', '20' ],
    selectedLimitOption: []
}

const selectedLimit = (state = limitInitialState, action) => {
    switch(action.type) {
        case actionsType.SELECT_SORT:
            return {
                ...state,
                selectedLimitOption:state.selectedLimitOption.push(action.limitOption)
            }
        default:
            return state
    }
}

const initialState = {
    query:'',
    posts: [],
    loading:false,
    hasError:false,
}

const posts = (state=initialState, action) => {
    switch(action.type) {
        case actionsType.USER_INPUT:
            return {
                ...state,
                query:action.userInput
            }
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


const rootReducer = combineReducers({
    selectedSort,
    selectedLimit,
    posts
})

export default rootReducer;