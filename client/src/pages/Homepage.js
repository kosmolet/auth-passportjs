import React, { useState, useEffect } from "react";
import Header from "./Header";

const Homepage = () => {
  const [user, setUser] = useState({
    name: "",
    profileImageUrl: "",
    twitterId: "",
    screenName: "",
    _id: "",
  });
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleNotAuthenticated = () => {
    setAuthenticated(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5070/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      if (response.status === 200) {
        const resJson = await response.json();
        setAuthenticated(true);
        setUser(resJson.user);
      } else {
        throw new Error("Failed to authenticate user");
      }
    } catch (err) {
      setAuthenticated(false);
      setError("Failed to authenticate user");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header
        authenticated={authenticated}
        handleNotAuthenticated={handleNotAuthenticated}
      />
      <div>
        {error ? <p>{error}</p> : null}
        {!authenticated ? (
          <h1>Please Login!</h1>
        ) : (
          <div>
            <h1>You have login succcessfully!</h1>
            <h2>Welcome {user.name}!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
