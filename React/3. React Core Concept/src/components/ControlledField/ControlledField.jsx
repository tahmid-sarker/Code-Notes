import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
        setError("Password Length Must be Greater than or Equal 6");
      } else {
        setError(" ");
        alert("Submitted");
    }
  };

  const handlePasswordChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.value);
    setPassword(e.target.value);

    // if (password.length < 6) {
    //   setError("Password Length Must be Greater than or Equal 6");
    // } else {
    //     setError(" ");
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Your Email" />
        <br />
        <input
          type="password"
          name="email"
          defaultValue={password}
          onChange={handlePasswordChange}
          placeholder="Enter Your PassWord"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: "red"}}>{error}</p>
    </>
  );
};

export default ControlledField;
