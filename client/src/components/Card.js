import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, name, href, color }) => {
  return (
    <Link to={`/${href}`}>
      <div
        className="card"
        style={{ border: `1px solid ${color}`, borderRadius: 2 }}
        onClick={() => window.open(`http://localhost:5070/${href}`, "_blank")}
      >
        <div>
          <p
            style={{
              margin: "0",
              textAlign: "left",
              background: `${color}`,
              color: "white",
              padding: "5px",
            }}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </div>
        <div
          style={{
            minHeight: 80,
            minWidth: 100,
            background: `url("${img}") no-repeat center center / 50% ${color}`,
          }}
        />
      </div>
    </Link>
  );
};

export default Card;
