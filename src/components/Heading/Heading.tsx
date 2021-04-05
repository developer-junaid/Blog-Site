import React from "react";
import "./heading.css";

interface HeadingPropsType {
  title: string;
  style?: {};
}

const Heading: React.FC<HeadingPropsType> = ({ title, style }) => {
  return (
    <div className="heading" style={style}>
      <h4>{title}</h4>
      <div className="underline"></div>
    </div>
  );
};

export default Heading;
