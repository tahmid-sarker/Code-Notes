import React from "react";
import useInputField from "../../hooks/useInputField";

const HookFrom = () => {
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        defaultValue={email}
        onChange={emailOnChange}
      />
      <br />
      <input
        type="password"
        name="password"
        defaultValue={password}
        onChange={passwordOnChange}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default HookFrom;
