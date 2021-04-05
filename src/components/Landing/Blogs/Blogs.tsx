import React from "react";
import Blog from "./../Blog/Blog";
import "./blogs.css";
import Heading from "../../Heading/Heading";

interface blogType {
  node: {
    id: string;
    catId: string;
    likes: number;
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
  return (
    <section className="blogs-section">
      <Heading title="From The Blog" />
      {blogs &&
        blogs.map((blog) => {
          // Extract Data
          const {
            id,
            catId,
            likes,
            title,
            createdAt,
            author,
            blogImage,
            content,
          } = blog.node;

          // Return
          return (
            <Blog
              key={id}
              id={id}
              title={title}
              imageSrc={blogImage.fluid.src}
              createdAt={createdAt}
              catId={catId}
            />
          );
        })}
    </section>
  );
};

export default Blogs;
