import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, singOutUser } = use(AuthContext)
  // console.log(user)

  const handleSignOut = () => {
    singOutUser()
    .then(() => console.log("Sign out successfully"))
    .catch((error) => console.log(error.message))
  }

  const NavLinks = <>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    {user && <li><NavLink to="/">Home</NavLink></li>}
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              {" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavLinks}
          </ul>
        </div>
        <h1 className="text-2xl font-bold">{user ? user.displayName : "Auth Integration"}</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {NavLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <h1 className="text-md mr-2 font-semibold">{user && user.email}</h1>
        <button className="btn" onClick={handleSignOut}>{user ? "Sign Out" : <Link to='/login'>Sign In</Link>}</button>
      </div>
    </div>
  );
};

export default Navbar;