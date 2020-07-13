import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    // console.log(props)
    const {posts} = props;
    // console.log(posts)
    return (
        <div className={classes.Container}>
            {posts.map((post,index) => (
                <li key={index} className={classes.List}>{post.title}</li>
            ))}
        </div>
    )
};

export default Posts;
