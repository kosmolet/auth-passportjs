import React, { useState, useEffect, useContext } from "react";
import ButtonsList from "../components/ButtonsList";
import MenuBar from "../components/MenuBar";
import UserProvider from "../store/UserProvider";
//import AppContext from "../context/context";

const Homepage = () => {
  const [user, setUser] = useState({});

  const [authenticated, setAuthenticated] = useState(false);
  const userData = useContext(UserProvider.context);
  const handleNotAuthenticated = () => {
    setAuthenticated(false);
  };

  return (
    <div>
      {console.log("U", userData.user)}
      <MenuBar
        authenticated={userData.authenticated}
        handleNotAuthenticated={handleNotAuthenticated}
      />
      <div>
        {userData.error ? <p>{userData.error}</p> : null}
        {!userData.authenticated ? (
          <div>
            <h1>Please Login!</h1>
            <ButtonsList />
          </div>
        ) : (
          <div>
            <h2>Welcome {userData.user.name}!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
