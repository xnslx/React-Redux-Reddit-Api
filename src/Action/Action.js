import axios from 'axios';

export const REQUEST_POSTS = "REQUEST_POST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";
export const USER_INPUT = "USER_INPUT";
export const SELECT_SORT = "SELECT_SORT";
export const SELECT_LIMIT = "SELECT_LIMIT";

export const userInput = input => {
  return {
    type: USER_INPUT,
    input
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

export const getPostsSuccess = json => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: json.data.children.map(child => child.data)
  };
};

export const getPostsFail = () => {
  return {
    type: GET_POSTS_FAIL
  };
};

export const fetchPosts = (query, sortBy, limit, posts) => {
  return dispatch => {
    dispatch(requestPosts(posts));
    return axios
      .get(
        `https://www.reddit.com/r/subreddit/search.json?q={query}&sort={sortBy}&limit={limit} `
      )
      .then(res => {
        res.json();
      })
      .then(json => dispatch(getPostsSuccess(posts, json)))
      .catch(err => {
        dispatch(getPostsFail(err));
      });
  };
};