import React, { useContext } from "react";
import ButtonsList from "../components/ButtonsList";
import UserProvider from "../store/UserProvider";

const Home = () => {
  const userData = useContext(UserProvider.context);

  return (
    <>
      <div className="home-content">
        {userData.error ? <p>{userData.error}</p> : null}
        {!userData.authenticated ? (
          <div>
            <h2 style={{ textAlign: "center" }}>Authentication methods</h2>
            <ButtonsList />
          </div>
        ) : (
          <div>
            <h2>Welcome {userData.user.name}!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
