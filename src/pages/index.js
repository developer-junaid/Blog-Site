import React from "react";
import Layout from "../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="large-img"></div>
        <div className="small-images">
          <div className="small-img"></div>
          <div className="small-img"></div>
          <div className="small-img"></div>
          <div className="small-img"></div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h3>Categories</h3>
        <div className="category-card">
          <button>Gadgets</button>
        </div>
        <div className="category-card">
          <button>Marketing</button>
        </div>
        <div className="category-card">
          <button>Trends</button>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section">
        <h3>From The Blog</h3>
        <div className="blog-card">
          <div className="card-img"></div>
          <div className="card-content">
            <p className="card-title">
              What 3 years of android development taught me the hard way
            </p>
            <p className="card-date">May 15 2018</p>
            <p className="card-tag">Trends</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="card-img"></div>
          <div className="card-content">
            <p className="card-title">
              What 3 years of android development taught me the hard way
            </p>
            <p className="card-date">May 15 2018</p>
            <p className="card-tag">Trends</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="card-img"></div>
          <div className="card-content">
            <p className="card-title">
              What 3 years of android development taught me the hard way
            </p>
            <p className="card-date">May 15 2018</p>
            <p className="card-tag">Trends</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h3>Newsletter</h3>
        <p>Enter your email address below to subscribe to my newsletter</p>
        <form>
          <input type="text" placeholder="Your email address.." />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </Layout>
  );
};
