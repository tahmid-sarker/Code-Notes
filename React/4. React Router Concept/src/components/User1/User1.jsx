import React from 'react';
import { useLoaderData } from 'react-router';

const User1 = () => {
    const users = useLoaderData();
    // console.log("User 1 data: ", users)
    return (
        <div>
            <h1>This is User 1</h1>
        </div>
    );
};

export default User1;