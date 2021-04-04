import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    // Newsletter Section
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
  );
};

export default Newsletter;
