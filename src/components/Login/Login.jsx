import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Login = () => {
    const [error, setError] = useState('')
    const [show,setShow] = useState(false)


  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  console.log(location);

  const from = location.state?.from?.pathname || "/"
  console.log(from);
  
  const handleSignIn = (e) => {

      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    setError('')

    signIn(email,password)
    .then(result =>{
        const signIn = result.user;
        console.log(signIn);
        form.reset()
        navigate( from, {replace: true})
    })
    .catch(error =>{
        console.log(error.message);
        setError(error.message)
    })
    
  };

  return (
    <div className="form-container">
      <h2 className="from-title">Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="from-control">
          <label className="from-label" htmlFor="">
            Email
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="from-control">
          <label className="from-label" htmlFor="">
            Password
          </label>
          <input type={show ? "text" : 'password'} name="password" id="password" required />
          <p className="show-hide" onClick={()=> setShow(!show)}><small>
            {
                show ? <span>Hide Password</span> : <span>Show Password</span>
            }
            </small></p>
        <p className="error">{error}</p>
        </div>
        <input className="form-btn" type="submit" value="Login" />
        <p>
          New to Ema John ?{" "}
          <Link to="/signup" className="new-account-link">
            Create New Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
