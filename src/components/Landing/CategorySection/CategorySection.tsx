import React from "react";
import "./categorySection.css";
import { Link } from "gatsby";
import CategoryBlogs from "../CategoryBlogs/CategoryBlogs";

interface blogType {
  node: {
    id: string;
    category: string;
    slug: string;
    likes: number;
    title: string;
    createdAt: string;
    author: string;
    blogImage: { fluid: { src: string } };
    content: {};
  };
}

interface propsType {
  blogs: blogType[];
}

const CategorySection: React.FC<propsType> = ({ blogs }) => {
  return (
    <div className="landing-category-section">
      <CategoryBlogs
        name={"News and Trends"}
        categoryName="trends"
        blogs={blogs}
      />
      <CategoryBlogs name={"Gadgets"} categoryName="gadgets" blogs={blogs} />
      <CategoryBlogs
        name={"Marketing"}
        categoryName="marketing"
        blogs={blogs}
      />
    </div>
  );
};

export default CategorySection;
