import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(100);
    }
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={handleCount}>Add</button>
        </>
    )
}

// Behind the Scene:

// const ["one", "two", "three"] = [1, 2, 3];

// const numbers = [1, 2, 3];
// const ["one", "two", "three"] = numbers;