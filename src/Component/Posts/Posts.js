import React from 'react'

const Posts = (props) => {
    console.log(props)
    const {posts} = props;
    console.log(posts)
    return (
        <ul>
            {posts.map(post => (
                <li key={post.index}>{post.title}</li>
            ))}
        </ul>
    )
};

export default Posts;
