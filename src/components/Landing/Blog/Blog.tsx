import React from "react";
import "./blog.css";
import { Link } from "gatsby";

interface blogPropsType {
  id?: string;
  category: string;
  slug: string;
  title: string;
  createdAt: string;
  imageSrc: string;
}

const Blog: React.FC<blogPropsType> = ({
  id,
  category,
  title,
  createdAt,
  slug,
  imageSrc,
}) => {
  return (
    //Blog Section
    <Link to={`/blogs/${slug}`} className="blog-card">
      <div className="card-img">
        <img src={imageSrc} alt="" />
      </div>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-date">{createdAt}</p>
        <p className="card-tag">{category}</p>
      </div>
    </Link>
  );
};

export default Blog;
