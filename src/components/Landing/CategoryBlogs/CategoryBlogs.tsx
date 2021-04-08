import React from "react";
import "./categoryBlogs.css";
import { Link } from "gatsby";
import CategoryCard from "../CategoryCard/CategoryCard";

interface blogType {
  node: {
    id: string;
    category: string;
    slug: string;
    likes: number;
    title: string;
    createdAt: string;
    author: string;
    blogImage: { fluid: { src: string } };
    content: {};
  };
}

interface propTypes {
  name: string;
  categoryName: string;
  blogs: blogType[];
}

const CategoryBlogs: React.FC<propTypes> = ({ name, categoryName, blogs }) => {
  // Filter 2 Blogs for Category
  let categoryBlogs = [];

  blogs.map((blog) => {
    if (blog.node.category === categoryName) {
      categoryBlogs.push(blog);
    }
  });

  return (
    <div className="landing-category-blogs">
      <div className="labels">
        <h4>{name}</h4>
        <Link to={`categories/${categoryName}`}>View All</Link>
      </div>
      <div className="category-cards">
        {categoryBlogs &&
          categoryBlogs.slice(0, 2).map((categoryBlog, index) => {
            console.log(categoryBlog);
            const {
              category,
              createdAt,
              blogImage,
              title,
              slug,
            } = categoryBlog.node;

            return (
              <CategoryCard
                key={slug}
                routeLink={`/blogs/${slug}`}
                className={
                  index == 1
                    ? "category-blog-card disable"
                    : "category-blog-card"
                }
                category={category}
                content={
                  "Engaging customers on social media is not an easy task. It requires the right strategy, a deep understanding ..."
                }
                date={createdAt}
                imageSrc={blogImage.fluid.src}
                title={title}
              />
            );
          })}
      </div>
      <Link to={`categories/${categoryName}`} className="load-btn">
        Load More
      </Link>
    </div>
  );
};

export default CategoryBlogs;
