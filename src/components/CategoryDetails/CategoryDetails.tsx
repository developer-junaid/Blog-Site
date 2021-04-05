import React from "react";
import "./CategoryDetails.css";
import Layout from "../Layout/Layout";
import Heading from "../Heading/Heading";
import Blog from "./../Landing/Blog/Blog";

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

interface CategoryPropsTypes {
  name: string;
  posts: blogDetailsType[];
}

const CategoryDetails: React.FC<CategoryPropsTypes> = ({ name, posts }) => {
  console.log(name, posts);

  return (
    <Layout>
      <Heading
        title={name}
        style={{ fontSize: "1.4rem", textTransform: "uppercase" }}
      />
      {posts &&
        posts.map((post) => {
          const { id, title, category, slug, createdAt, blogImage } = post;

          return (
            <Blog
              key={id}
              title={title}
              category={category}
              slug={slug}
              createdAt={createdAt}
              imageSrc={blogImage.fluid.src}
            />
          );
        })}
    </Layout>
  );
};

export default CategoryDetails;
