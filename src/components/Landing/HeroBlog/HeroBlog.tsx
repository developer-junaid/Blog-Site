import React from "react";
import "./heroBlog.css";
import { Link } from "gatsby";
import Newsletter from "../Newsletter/Newsletter";
import SideCard from "./SideCard.tsx/SideCard";

interface sideBlogsType {
  category: string;
  title: string;
  date: string;
  slug: string;
}

interface propTypes {
  title: string;
  date: string;
  category: string;
  content: string;
  slug: string;
  imageSrc?: string;
  id?: string;
  sideBarTitle?: string;
  sideBlogs?: sideBlogsType[];
  sideBar: boolean;
}

const HeroBlog: React.FC<propTypes> = ({
  title,
  date,
  category,
  imageSrc,
  content,
  slug,
  sideBarTitle,
  sideBlogs,
  sideBar,
  id,
}) => {
  return (
    // HeroBlog Section
    <div className="hero-wrapper">
      <section className="hero-blog-card">
        <div className="hero-card-img" id={id}>
          {imageSrc ? <img src={imageSrc} alt="" /> : null}
        </div>
        <div className="hero-card-content">
          <p className="hero-card-tag">{category}</p>
          <p className="hero-card-title">{title}</p>
          <p className="hero-card-date"> {date} </p>
          <p className="hero-card-text">{content}</p>
          <Link to={`/blogs/${slug}`}>Read More</Link>
        </div>
      </section>
      {sideBar && (
        <div className="side-section">
          <h4>{sideBarTitle}</h4>
          <SideCard
            title={"How I went from programming with a Nokia to Samsung!"}
            date="15 May 2020"
            category="gadgets"
            slug="slug"
          />
          <SideCard
            title={"How I went from programming with a Nokia to Samsung!"}
            date="15 May 2020"
            category="trends"
            slug="slug"
          />
          <SideCard
            title={"How I went from programming with a Nokia to Samsung!"}
            date="15 May 2020"
            category="gadgets"
            slug="slug"
          />
          <SideCard
            title={"How I went from programming with a Nokia to Samsung!"}
            date="15 May 2020"
            category="gadgets"
            slug="slug"
          />
          <SideCard
            title={"How I went from programming with a Nokia to Samsung!"}
            date="25 May 2020"
            category="marketing"
            slug="slug"
          />
        </div>
      )}
    </div>
  );
};

export default HeroBlog;
