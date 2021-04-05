import React from "react";
import "./categories.css";
import Heading from "./../../Heading/Heading";
import { Link } from "gatsby";

const Categories = () => {
  return (
    // Categories Section
    <section className="categories-section">
      <Heading title={"Categories"} />

      <div className="category-card" id="gadgets-category-card">
        <Link className="button" to="/categories/gadgets">
          Gadgets
        </Link>
      </div>
      <div className="category-card" id="marketing-category-card">
        <Link className="button" to="/categories/marketing">
          Marketing
        </Link>
      </div>
      <div className="category-card" id="trends-category-card">
        <Link className="button" to="/categories/trends">
          Trends
        </Link>
      </div>
    </section>
  );
};

export default Categories;
