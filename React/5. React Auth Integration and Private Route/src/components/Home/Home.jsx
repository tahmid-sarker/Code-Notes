import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Welcome Back!</h1>
      <h2 className="text-2xl text-center">My self {user.displayName}</h2>
      <div className="flex place-content-center mt-2">
        <img src={user.photoURL} alt={user.displayName} className="rounded-lg"/>
      </div>
    </div>
  );
};

export default Home;
