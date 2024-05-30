import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();

  // const params = useParams();
  // console.log(params)
  // console.log(params.userId)

//   const { userId } = useParams();
//   console.log(userId);

  const { name, website } = user;
  return (
    <div>
      <h4>This is {name}</h4>
      <h4>His Website: {website}</h4>
    </div>
  );
};

export default UserDetails;
