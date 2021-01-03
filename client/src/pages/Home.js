import React from "react";
import ButtonsList from "../components/ButtonsList";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <p>Login with Passport.js</p>
        <ButtonsList />
      </div>
    </div>
  );
};

export default Home;
