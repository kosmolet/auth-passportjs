import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserProvider from "../store/UserProvider";
import { data } from "../data/index";
import _ from "lodash";
import PassportLogo from "../assets/images/passport.png";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const MenuBar = (props) => {
  const { authenticated, handleNotAuthenticated } = props;
  const handleSignIn = () => {
    window.open("http://localhost:5070/auth/twitter", "_self");
  };

  const handleLogout = () => {
    window.open("http://localhost:5070/auth/logout", "_self");
    handleNotAuthenticated();
  };

  // const loginType = !_.isEmpty(userData)
  //   ? _.find(data, (d) => d.name === userData.provider)
  //   : {};
  // const handleLogout = async () => {
  //   try {
  //     await fetch(`http://localhost:5070/auth/logout`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="menu-bar">
      <Link className="btn menu-btn" to="/" title="Home">
        <HomeIcon />
      </Link>

      {authenticated ? (
        <div>
          {/* <Link
            className="btn menu-btn"
            to="/profile"
            title={`${loginType.name} data`}
          >
            <div
              className="app-icon-container"
              style={{ backgroundColor: loginType.color }}
            >
              <img
                className="btn-icon"
                src={loginType.img}
                alt={loginType.alt}
                style={{ position: "absolute", top: 17, paddingLeft: 5 }}
              />
            </div>
          </Link> */}
          <Link className="btn menu-btn" to="/profile" title="Profile">
            <PermIdentityIcon />
          </Link>
          <Link
            to={`/`}
            className="btn menu-btn"
            title="Logout"
            style={{ float: "right" }}
            onClick={handleLogout}
          >
            <ExitToAppIcon />
          </Link>
        </div>
      ) : (
        <div>
          <Link className="btn menu-btn disabled" to="/">
            <img
              src={PassportLogo}
              alt="passport.js logo"
              style={{ height: 19 }}
            />
          </Link>

          <button onClick={handleSignIn}>Login</button>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
