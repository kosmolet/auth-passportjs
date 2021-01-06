import React, { createContext, useState, useEffect } from "react";
const context = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

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
        setUser({ ...resJson.user, authenticated: true });
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
    <context.Provider value={{ user, authenticated, error }}>
      {children}
    </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;
