import React from "react";
import "./newsletter.css";
import Heading from "../../Heading/Heading";

interface NewsletterPropsType {
  style?: {};
}

const Newsletter: React.FC<NewsletterPropsType> = ({ style }) => {
  return (
    // Newsletter Section
    <section className="newsletter-section" style={style}>
      <Heading title={"Newsletter"} />
      <p>Enter your email address below to subscribe to my newsletter</p>
      <form>
        <input type="email" placeholder="Your email address.." />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
