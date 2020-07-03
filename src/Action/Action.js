import axios from 'axios';

export const GET_POSTS = 'GET_POST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';

export const getPosts = () => {
    return {
        type: GET_POSTS,
    }
}

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts,
    }
}

export const getPostsFail = () => {
    return {
        type: GET_POSTS_FAIL
    }
}

export const fetchPosts = () => {
    return dispatch => {
        return axios.get('https://www.reddit.com/r/subreddit/search.json?q=React,js&sort=relevance&limit=10 ')
            .then(() => {
                dispatch(getPostsSuccess())
            })
            .catch((err) => {
                dispatch(getPostsFail())
            })
    }
}