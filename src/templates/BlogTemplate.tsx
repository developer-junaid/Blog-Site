import React from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";

// Blog Template
export default function BlogTemplate({ pageContext }) {
  // Data recieved
  const postDetails = pageContext.postDetails.node;
  const allPosts = pageContext.allPosts;

  const {
    category,
    slug,
    title,
    author,
    likes,
    createdAt,
    blogImage,
    content,
  } = postDetails;

  let sideBlogs = [];

  allPosts.map((post) => {
    if (post.node.category === category) {
      let sideBlog = {
        category: post.node.category,
        title: post.node.title,
        date: post.node.createdAt,
        slug: post.node.slug,
      };

      sideBlogs.push(sideBlog);
    }
  });

  return (
    <BlogDetails
      slug={slug}
      category={category}
      title={title}
      content={content.raw}
      imageSrc={blogImage.fluid.src}
      likes={likes}
      author={author}
      createdAt={createdAt}
      sideBlogs={sideBlogs}
    />
  );
}
