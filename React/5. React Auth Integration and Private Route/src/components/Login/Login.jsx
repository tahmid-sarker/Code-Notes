import React, { use, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { signInUser } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  // console.log(location)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSuccessMessage(false)
    setErrorMessage("")

    // Signin user
    signInUser(email, password)
    .then((result) => {
      
      //Email Verify
      if(!result.user.emailVerified) {
        alert("The email you tired to login is not verified. Please check your email and verify the account.");
        return;
      } else {
        setSuccessMessage(true)
        navigate(location.state || "/") // Redirect to the previous page or home page
      }
    })
    .catch((error) => setErrorMessage(error.message))
  }

  const handleForgetPassword = () => {
    // console.log(emailRef.current)
    const email = emailRef.current.value;
    // console.log(email)

    //Send a password reset email
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("An Email has sent to you. Reset Password Now!")
    });
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-7 shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input name="email" ref={emailRef} type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <div className="relative">
            <input name="password" type={showPassword ? "text" : "password"} className="input" placeholder="Password" />
            <button type="button" className="btn btn-xs absolute right-6 top-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div>
            <a className="link link-hover" onClick={handleForgetPassword}>Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          {successMessage && <p className="text-green-500">Sign In Successfully</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;