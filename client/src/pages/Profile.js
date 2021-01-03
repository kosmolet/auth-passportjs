import React, { useContext, useState } from "react";
import UserProvider from "../store/UserProvider";
import UserData from "../components/UserData";

import DataTags from "../components/DataTags";
import _ from "lodash";

const Profile = () => {
  const [selected, setSelected] = useState("All");
  const userData = useContext(UserProvider.context);
  const text = _.isEmpty(userData)
    ? "Login to see the user data "
    : "Explore User Info";
  const options = Object.keys(userData).filter((key) => {
    return userData[key] !== null;
  });

  return (
    <div className="profile-page">
      <p className="profile-page-title" style={{ textAlign: "center" }}>
        {text}
      </p>

      <DataTags
        options={options}
        onClick={(option) => setSelected(option)}
        selected={selected}
      />

      <UserData userData={userData} selected={selected} />

      <div style={{ marginBottom: 20 }} />
    </div>
  );
};

export default Profile;
