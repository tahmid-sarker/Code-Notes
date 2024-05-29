import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
      };
    return (
        <form onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} placeholder="Enter your Email" />
        <br />
        <input type="password" ref={passwordRef} placeholder="Enter your Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
};

export default UnControlledField;