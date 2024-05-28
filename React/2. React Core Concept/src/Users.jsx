import { use } from "react";

export default function Users({fetchUsers}) {
    
    const users = use(fetchUsers); // use is a React API that lets you read the value of a resource like a Promise or context.
    // console.log(users);
    // users.map(user => console.log(user));
    // users.map(user => console.log(user.name));
    return(
        <h1>Users: {users.length}</h1>
    )
}