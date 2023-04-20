import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span className="text-white">
            {user.email} <button onClick={handleSignOut}>Sign Out</button>{" "}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
