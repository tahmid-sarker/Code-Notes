import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetail2 from './UserDetail2';

const User = ({user}) => {
    // console.log(user)
    const [showEmail, setShowEmail] = useState(false)
    const [visitHome, setVisitHome] = useState(false)
    const {id, name, username, phone} = user;
    const location = useLocation();
    // console.log(location)

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())

    const styleUser = {
        border: "3px solid lightgreen",
        borderRadius: "20pageXOffset",
        padding: "20px",
        margin: "10px"
    }

    if(visitHome) {
        return <Navigate to="/"></Navigate>
    }
    return (
        <div style={styleUser}>
            <h4>{name}</h4>
            <p>{username}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowEmail(!showEmail)}>{showEmail ? "Hide Email" : "Show Email"}</button>
            {
                showEmail && <Suspense fallback="...loading">
                    <UserDetail2 userPromise={userPromise}></UserDetail2>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;