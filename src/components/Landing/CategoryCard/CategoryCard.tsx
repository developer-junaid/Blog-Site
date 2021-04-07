import React from "react";
import "./categoryCard.css";

interface propsType {
  title: string;
  category: string;
  date: string;
  content: string;
  imageSrc: string;
  className: string;
}

const CategoryCard: React.FC<propsType> = ({
  title,
  category,
  date,
  content,
  imageSrc,
  className,
}) => {
  return (
    <section className={className}>
      <div className="category-card-img">
        <img src={imageSrc} alt="" />
      </div>
      <div className="category-card-content">
        <p className="category-card-tag">{category}</p>
        <p className="category-card-title">{title}</p>
        <p className="category-card-date"> {date} </p>
        <p className="category-card-text">{content}</p>
      </div>
    </section>
  );
};

export default CategoryCard;
