import React from "react";
import Layout from "../components/Layout/Layout";
import "./index.css";

export default () => {
  return (
    <Layout>
      <div className="homepage-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="large-img">All about tech !</div>
          <div className="small-images">
            <div className="small-img" id="small-img-1"></div>
            <div className="small-img" id="small-img-2"></div>
            <div className="small-img" id="small-img-3"></div>
            <div className="small-img" id="small-img-4"></div>
          </div>
        </section>

        {/* Categories Section */}
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

        {/* Blogs Section */}
        <section className="blogs-section">
          <div className="heading">
            <h3>From The Blog</h3>
            <div className="underline"></div>
          </div>
          <div className="blog-card">
            <div className="card-img" id="card-img-1"></div>
            <div className="card-content">
              <p className="card-title">
                What 3 years of android development taught me the hard way
              </p>
              <p className="card-date">May 15 2018</p>
              <p className="card-tag">Trends</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="card-img" id="card-img-2"></div>
            <div className="card-content">
              <p className="card-title">
                In defense of being on the phone all the damn time 24 hours
              </p>
              <p className="card-date">May 15 2018</p>
              <p className="card-tag">Trends</p>
            </div>
          </div>
          <div className="blog-card">
            <div className="card-img" id="card-img-3"></div>
            <div className="card-content">
              <p className="card-title">
                Infusing Tesla’s future with Mustang’s pride and passion
              </p>
              <p className="card-date">May 15 2018</p>
              <p className="card-tag">Trends</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="heading">
            <h3>Newsletter</h3>
            <div className="underline"></div>
          </div>
          <p>Enter your email address below to subscribe to my newsletter</p>
          <form>
            <input type="email" placeholder="Your email address.." />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};
