import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const posts = useLoaderData();
        // console.log(posts)
    return (
        <div>
            {
                posts.map((post, index) => <Post key={index} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;