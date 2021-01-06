import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { authenticated, handleNotAuthenticated } = props;

  const handleSignInClick = () => {
    window.open("http://localhost:5070/auth/twitter", "_self");
  };

  const handleLogoutClick = () => {
    window.open("http://localhost:5070/auth/logout", "_self");
    handleNotAuthenticated();
  };
  return (
    <div>
      <Link to="/">Home</Link>

      {authenticated ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleSignInClick}>Login</button>
      )}
    </div>
  );
};

export default Header;
