import React from "react";

const UserData = ({ userData, selected }) => {
  const data = selected === "All" ? userData : userData[selected];

  return (
    <div className="user-data-wr">
      <div className="user-data-title">
        <p style={{ textAlign: "center" }}>User Data</p>
      </div>
      <div className="content">
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    </div>
  );
};

export default UserData;
