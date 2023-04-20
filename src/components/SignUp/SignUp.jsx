import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleSignUp=(e)=>{
        e.preventDefault();
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email,password);

        if(password !== confirm){
            setError("Your password did not match")
            return
        }
        else if(password.length < 6){
            setError("Password must be 6 characters")
            return
        }

        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
        form.reset()
    }

  return (
    <div className="form-container">
      <h2 className="from-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="from-control">
          <label className="from-label" htmlFor="">
            Email
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="from-control">
          <label className="from-label" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="from-control">
          <label className="from-label" htmlFor="confirm">
            Confirm Password
          </label>
          <input type="password" name="confirm" id="confirm" required />
          <p className="text-error">{error}</p>
        </div>
        <input className="form-btn" type="submit" value="Sign Up" />
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="new-account-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
