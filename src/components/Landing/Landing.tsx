import React from "react";
import Blogs from "./Blogs/Blogs";
import Categories from "./Categories/Categories";
import Newsletter from "./Newsletter/Newsletter";
import Hero from "./Hero/Hero";
import "./landing.css";

interface blogType {
  node: {};
}

interface landingPropsType {
  blogs: blogType[];
}

const Landing: React.FC<landingPropsType> = ({ blogs }) => {
  return (
    <div className="homepage-container">
      <Hero />
      <Categories />
      <Blogs blogs={blogs} />
      <Newsletter />
    </div>
  );
};

export default Landing;
