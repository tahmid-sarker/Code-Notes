import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const users = use(userPromise);
    // console.log("User 2 data: ", users)

    return (
        <div>
            <h1>This is User 2</h1>
        </div>
    );
};

export default User2;