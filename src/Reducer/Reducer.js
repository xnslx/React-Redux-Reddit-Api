export const initialState = {
    posts: [],
    loading:false,
    hasError:false
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default postReducer;

