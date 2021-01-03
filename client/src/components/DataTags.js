import React from "react";

const DataTags = ({ options, onClick, selected }) => {
  const style = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 2,
    fontSize: 12,
  };
  const allOptions = ["All", ...options];

  return (
    <div className="data-tags">
      {allOptions.map((option) => {
        const extraClass = option === selected ? "selected" : "";

        return (
          <div
            key={option}
            onClick={() => onClick(option)}
            className={`tag ${extraClass}`}
            title={option}
          >
            <p style={style}>{option}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DataTags;
