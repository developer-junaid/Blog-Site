import React from "react";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";

interface blogDetailsType {
  title: string;
  id: string;
  createdAt: string;
  blogImage: { fluid: { src: string } };
  content: string;
  likes: number;
  author: string;
  slug: string;
  category: string;
}

// Blog Template
export default function CategoryTemplate({ pageContext }) {
  const category = pageContext.categoryDetails;
  const postDetails = pageContext.postDetails;
  const { id, name } = category.node;
  const postsToShow: blogDetailsType[] = [];

  postDetails.map((post) => {
    if (post.node.category === name) {
      postsToShow.push(post.node);
    }
  });

  return <CategoryDetails name={name} posts={postsToShow} />;
}
