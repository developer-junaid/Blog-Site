import React from "react";
import "./categorySection.css";
import { Link } from "gatsby";
import CategoryBlogs from "../CategoryBlogs/CategoryBlogs";

const blogs = [
  {
    title: "The biggest and most awesome camera rumors of the year",
    date: "May 15 2018",
    imageSrc:
      "//images.ctfassets.net/8u45elrcb9jl/1J0iKQuMrGbj4McTizR2nO/e5d96b00e844226665e705a48738ce11/camera.jpg?w=800&q=50",
    category: "trends",
    slug: "camera-rumors",
    content:
      "Engaging customers on social media is not an easy task. It requires the right strategy, a deep understanding ...",
  },
  {
    title: "What 3 years of android development taught me",
    date: "May 15 2018",
    imageSrc:
      "//images.ctfassets.net/8u45elrcb9jl/6S8fBpxkx7VS35wLV9BOmX/8f30252bdaf637e553319804a64c9719/tesla.jpg?w=800&q=50",
    category: "trends",
    slug: "3-years-of-android-development",
    content:
      "Engaging customers on social media is not an easy task. It requires the right strategy, a deep understanding ...",
  },
];

const CategorySection = () => {
  return (
    <div className="landing-category-section">
      <CategoryBlogs
        name={"News and Trends"}
        routeLink="/categories/trends"
        blogs={blogs}
      />
      <CategoryBlogs
        name={"Gadgets"}
        routeLink="/categories/gadgets"
        blogs={blogs}
      />
      <CategoryBlogs
        name={"Marketing"}
        routeLink="/categories/marketing"
        blogs={blogs}
      />
    </div>
  );
};

export default CategorySection;
