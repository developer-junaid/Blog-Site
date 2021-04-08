import React from "react";
import "./heroBlog.css";
import { Link } from "gatsby";
import Newsletter from "../Newsletter/Newsletter";
import SideCard from "./SideCard.tsx/SideCard";

const HeroBlog = () => {
  return (
    // HeroBlog Section
    <div className="hero-wrapper">
      <section className="hero-blog-card">
        <div className="hero-card-img">
          {/* <img src={HeroImg} alt="" /> */}
        </div>
        <div className="hero-card-content">
          <p className="hero-card-tag">Gadgets</p>
          <p className="hero-card-title">
            7 Proven Tactics to Boost Your Customer Engagement on Social Media
          </p>
          <p className="hero-card-date"> May 15 2018 </p>
          <p className="hero-card-text">
            Engaging customers on social media is not an easy task. It requires
            the right strategy, a deep understanding of your audience, and
            content output that aligns with this understanding. If you're still
            struggling with engaging your audience ...
          </p>
          <Link to="/">Read More</Link>
        </div>
      </section>
      <div className="side-section">
        <h4>More Featured</h4>
        <SideCard
          title={"How I went from programming with a Nokia to Samsung!"}
          date="15 May 2020"
          category="gadgets"
          routeLink="/blogs/Slug"
        />
        <SideCard
          title={"How I went from programming with a Nokia to Samsung!"}
          date="15 May 2020"
          category="trends"
          routeLink="/blogs/Slug"
        />
        <SideCard
          title={"How I went from programming with a Nokia to Samsung!"}
          date="15 May 2020"
          category="gadgets"
          routeLink="/blogs/Slug"
        />
        <SideCard
          title={"How I went from programming with a Nokia to Samsung!"}
          date="15 May 2020"
          category="gadgets"
          routeLink="/blogs/Slug"
        />
        <SideCard
          title={"How I went from programming with a Nokia to Samsung!"}
          date="25 May 2020"
          category="marketing"
          routeLink="/blogs/Slug"
        />
      </div>
    </div>
  );
};

export default HeroBlog;
