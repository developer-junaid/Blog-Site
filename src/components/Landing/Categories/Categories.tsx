import React from "react";
import "./categories.css";
import Heading from "./../../Heading/Heading";

const Categories = () => {
  return (
    // Categories Section
    <section className="categories-section">
      <Heading title={"Categories"} />

      <div className="category-card" id="gadgets-category-card">
        <button>Gadgets</button>
      </div>
      <div className="category-card" id="marketing-category-card">
        <button>Marketing</button>
      </div>
      <div className="category-card" id="trends-category-card">
        <button>Trends</button>
      </div>
    </section>
  );
};

export default Categories;
