import React from "react";

// Blog Template
export default function BlogPost({ pageContext }) {
  // Data recieved
  const post = pageContext.postDetails.node;
  console.log(post);
  const {
    id,
    catId,
    title,
    author,
    likes,
    createdAt,
    blogImage,
    content,
  } = post;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
