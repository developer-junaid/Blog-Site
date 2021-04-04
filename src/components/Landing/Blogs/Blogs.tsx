import React from "react";
import Blog from "./../Blog/Blog";
import "./blogs.css";

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
  // console.log("blogs", blogs);

  // blogs &&
  //   blogs.map((blog) => {
  //     console.log(blog.node);
  //     const {
  //       id,
  //       catId,
  //       likes,
  //       title,
  //       createdAt,
  //       author,
  //       blogImage,
  //       content,
  //     } = blog;

  //     return <Blog />;
  //   });

  return (
    <section className="blogs-section">
      <div className="heading">
        <h3>From The Blog</h3>
        <div className="underline"></div>
      </div>
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
