import axios from 'axios';

export const GET_POSTS = 'GET_POST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL';
export const SELECT_OPTION = 'SELECT_POSTS';

export const selectOption = (value) => {
    return {
        type:SELECT_OPTION,
        value
    }
}
export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts
    }
}

export const getPostsSuccess = (json) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts: json.data.children.map(child=>child.data),
    }
}

export const getPostsFail = () => {
    return {
        type: GET_POSTS_FAIL
    }
}

export const fetchPosts = (query, sortBy, limit, posts) => {
    return dispatch => {
        dispatch(getPosts(posts))
        return axios.get(`https://www.reddit.com/r/subreddit/search.json?q={query}&sort={sortBy}&limit={limit} `)
            .then((res) => {
                res.json()
            })
            .then((json) => dispatch(getPostsSuccess(posts, json)))
            .catch((err) => {
                dispatch(getPostsFail(err))
            })
    }
}

