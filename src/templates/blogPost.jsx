import React from "react";

// Blog Template
export default function BlogPost({ pageContext }) {
  // Data recieved
  pageContext.postDetails && console.log(pageContext.postDetails);

  return (
    <div>
      <h1>Blog Post</h1>
    </div>
  );
}
