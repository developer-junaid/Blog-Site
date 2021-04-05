import React from "react";
import Blog from "./../Blog/Blog";
import "./blogs.css";
import Heading from "../../Heading/Heading";

interface blogType {
  node: {
    id: string;
    category: string;
    likes: number;
    slug: string;
    title: string;
    createdAt: string;
    author: string;
    blogImage: { fluid: { src: string } };
    content: {};
  };
}

interface blogsPropsType {
  blogs: blogType[];
}

const Blogs: React.FC<blogsPropsType> = ({ blogs }) => {
  let counter = 0;

  return (
    <section className="blogs-section">
      <Heading title="From The Blog" />
      {blogs &&
        blogs.map((blog) => {
          // Extract Datas
          const {
            id,
            category,
            likes,
            title,
            slug,
            createdAt,
            author,
            blogImage,
            content,
          } = blog.node;

          counter++;
          if (counter <= 3) {
            // Return
            return (
              <Blog
                key={id}
                id={id}
                title={title}
                imageSrc={blogImage.fluid.src}
                createdAt={createdAt}
                category={category}
                slug={slug}
              />
            );
          }
        })}
    </section>
  );
};

export default Blogs;
