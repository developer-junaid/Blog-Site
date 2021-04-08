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
          {sideBlogs &&
            sideBlogs.map((sideBlog, index) => {
              const { category, date, slug, title } = sideBlog;

              return (
                <SideCard
                  key={index}
                  category={category}
                  date={date}
                  slug={slug}
                  title={title}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HeroBlog;
