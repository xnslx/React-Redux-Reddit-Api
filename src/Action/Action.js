import axios from 'axios';

export const REQUEST_POSTS = "REQUEST_POST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const USER_INPUT = "USER_INPUT";
export const SELECT_SORT = "SELECT_SORT";
export const SELECT_LIMIT = "SELECT_LIMIT";
export const SAVED_USER_INPUT = 'SAVED_USER_INPUT';

export const userInput = query => {
  return {
    type: USER_INPUT,
    userInput:query
  };
};


export const selectSort = sortOption => {
  return {
    type: SELECT_SORT,
    sortOption
  };
};

export const selectLimit = limitOption => {
  return {
    type: SELECT_LIMIT,
    limitOption
  };
};
export const requestPosts = posts => {
  return {
    type: REQUEST_POSTS,
    posts
  };
};

export const getPostsSuccess = data => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: data.children.map(child => child.data)
  };
};

export const getPostsFail = () => {
  return {
    type: GET_POSTS_FAIL
  };
};

export const fetchPosts = async (query, sortBy, limit) => {
  const result = await axios
    .get(
        `https://www.reddit.com/r/subreddit/search.json?q=${query}&sort=${sortBy}&limit=${limit} `
    )
    .catch(error => console.log(error))
    console.log(result)
    return getPostsSuccess(result.data.data)
};

// two ways of fetching api


// export const fetchPosts = (query, sortBy, limit) => {
//     return dispatch => {
//         dispatch(requestPosts(query, sortBy, limit))
//         return fetch(`https://www.reddit.com/r/subreddit/search.json?q=${query}&sort=${sortBy}&limit=${limit} `)
//             .then(response => response.json())
//             .then(json => dispatch(getPostsSuccess(json)))
//     }
// }