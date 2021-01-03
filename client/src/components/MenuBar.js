import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserProvider from "../store/UserProvider";
import { data } from "../data/index";
import _ from "lodash";
import PassportLogo from "../assets/images/passport.png";
import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const MenuBar = () => {
  const userData = useContext(UserProvider.context);
  const loginType = !_.isEmpty(userData)
    ? _.find(data, (d) => d.name === userData.provider)
    : {};
  const handleLogout = async () => {
    try {
      await fetch(`http://localhost:5070/auth/logout`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="menu-bar">
      {!_.isEmpty(userData) && (
        <Link
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
        </Link>
      )}

      {_.isEmpty(userData) && (
        <Link className="btn menu-btn disabled" to="/">
          <img
            src={PassportLogo}
            alt="passport.js logo"
            style={{ height: 19 }}
          />
        </Link>
      )}

      <Link className="btn menu-btn" to="/" title="Home">
        <HomeIcon />
      </Link>

      {!_.isEmpty(userData) && (
        <Link className="btn menu-btn" to="/profile" title="Profile">
          <PermIdentityIcon />
        </Link>
      )}

      {!_.isEmpty(userData) && (
        <Link
          to={`/`}
          className="btn menu-btn"
          title="Logout"
          style={{ float: "right" }}
          onClick={handleLogout}
        >
          <ExitToAppIcon />
        </Link>
      )}
    </div>
  );
};

export default MenuBar;
