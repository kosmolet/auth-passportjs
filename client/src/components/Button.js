import React from "react";

const Button = ({ props }) => {
  const { img, href, alt, color, txt, name } = props;

  const style = props.colors
    ? {
        margin: 5,
        display: "block",
        background: `${props.colors.baseCoat}`,
      }
    : { backgroundColor: color, margin: 5, display: "block" };

  return (
    <button
      title={txt}
      className="btn login-btn"
      style={style}
      onClick={() => window.open(`http://localhost:5070/${href}`, "_blank")}
    >
      <img src={img} alt={alt} className="btn-icon" />
      <span className="btn-txt">{`${name.toUpperCase()} Login`}</span>
    </button>
  );
};

export default Button;
