import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    // Categories Section
    <section className="categories-section">
      <div className="heading">
        <h3>Categories</h3>
        <div className="underline"></div>
      </div>

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
