import * as actionsType from '../Action/Action';
 

export const initialState = {
    posts: [],
    loading:false,
    hasError:false,
    query:'',
    sortValue:['relevance', 'hot', 'top', 'new'],
    limitValue:['5', '10','15', '20']
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionsType.GET_POSTS:
            return {
                ...state,
                loading:true,
                hasError:false
            }
        case actionsType.GET_POSTS_SUCCESS:
            return {
                posts:action.payload,
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

export default postReducer;

