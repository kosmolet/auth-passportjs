import React from "react";
// import Card from "./Card";
import Button from "./Button";
import { data } from "../data/index";

const ButtonsList = () => {
  return data.map((i) => {
    return (
      <div className="buttons">
        {/* <Card {...i} key={i.name} /> */}
        <Button props={i} key={i.name} />
      </div>
    );
  });
};

export default ButtonsList;
