import React from "react";
import "./blog.css";

interface blogPropsType {
  catId: string;
  title: string;
  createdAt: string;
  imageSrc: string;
}

const Blog: React.FC<blogPropsType> = ({
  catId,
  title,
  createdAt,
  imageSrc,
}) => {
  console.log(catId, title, createdAt, imageSrc);

  return (
    //Blog Section
    <div className="blog-card">
      <div className="card-img">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-date">{createdAt}</p>
        <p className="card-tag">trends</p>
      </div>
    </div>
  );
};

export default Blog;
