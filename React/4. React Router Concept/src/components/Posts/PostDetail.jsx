import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData(); // Individual Load
    const navigate = useNavigate();
    const { title, body } = post;
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetail;