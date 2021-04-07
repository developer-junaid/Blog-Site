import React from "react";
import "./categoryBlogs.css";
import { Link } from "gatsby";
import CategoryCard from "../CategoryCard/CategoryCard";

interface blogType {
  title: string;
  date: string;
  imageSrc: string;
  category: string;
  content: string;
}

interface propTypes {
  name: string;
  routeLink: string;
  blogs: blogType[];
}

const CategoryBlogs: React.FC<propTypes> = ({ name, routeLink, blogs }) => {
  return (
    <div className="landing-category-blogs">
      <div className="labels">
        <h4>{name}</h4>
        <Link to={routeLink}>View All</Link>
      </div>
      <div className="category-cards">
        {blogs &&
          blogs.map((blog, index) => {
            const { category, content, date, imageSrc, title } = blog;

            console.log(index);

            return (
              <CategoryCard
                className={
                  index == 1
                    ? "category-blog-card disable"
                    : "category-blog-card"
                }
                category={category}
                content={content}
                date={date}
                imageSrc={imageSrc}
                title={title}
              />
            );
          })}
      </div>
      <Link to={routeLink} className="load-btn">
        Load More
      </Link>
    </div>
  );
};

export default CategoryBlogs;
