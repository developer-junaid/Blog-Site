import React from "react";
import "./sideCard.css";
import { Link } from "gatsby";

interface propTypes {
  category: string;
  title: string;
  date: string;
  routeLink: string;
}

const SideCard: React.FC<propTypes> = ({
  category,
  title,
  date,
  routeLink,
}) => {
  return (
    <Link to={routeLink} className="side-card">
      <p className="side-card-tag">{category}</p>
      <p className="side-card-title">{title}</p>
      <p className="side-card-date"> {date} </p>
    </Link>
  );
};

export default SideCard;
