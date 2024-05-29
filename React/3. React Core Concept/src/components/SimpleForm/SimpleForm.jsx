import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("OK!")
    // console.log(e.target.name)
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your Name" />
        <br />
        <input type="email" name="email" placeholder="Enter your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
  );
};

export default SimpleForm;
