import React from "react";
import BlogDetails from "../components/BlogDetails/BlogDetails";

// Blog Template
export default function BlogTemplate({ pageContext }) {
  // Data recieved
  const post = pageContext.postDetails.node;
  console.log("blog", post);
  const {
    category,
    slug,
    title,
    author,
    likes,
    createdAt,
    blogImage,
    content,
  } = post;

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
    />
  );
}
