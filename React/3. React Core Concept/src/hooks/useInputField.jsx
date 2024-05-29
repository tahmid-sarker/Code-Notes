import React, { useState } from 'react';

const useInputField = (defaultValue) => {
    const [input, setInput] = useState(defaultValue)

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return [input, handleInput]
};

export default useInputField;