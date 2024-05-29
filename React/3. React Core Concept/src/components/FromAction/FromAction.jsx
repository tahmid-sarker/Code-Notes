import React from "react";

const formAction = () => {

  const handleFormAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Enter your Name" />
        <br />
        <input type="email" name="email" placeholder="Enter your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
  );
};

export default formAction;
