import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProvider from "./store/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <UserProvider>
      <Router>
        <Route path="/" component={MenuBar} />
        <Route path="/profile" component={Profile} />

        <Route exact path="/" component={Home} />
      </Router>
    </UserProvider>
  );
}

export default App;
