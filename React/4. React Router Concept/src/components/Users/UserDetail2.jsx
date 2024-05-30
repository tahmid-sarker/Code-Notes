import React, { use } from "react";

const UserDetail2 = ({ userPromise }) => {
  const { email } = use(userPromise);
  return (
    <div>
      <p>{email}</p>
    </div>
  );
};

export default UserDetail2;
