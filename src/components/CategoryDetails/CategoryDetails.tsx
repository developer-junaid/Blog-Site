import React from "react";
import "./CategoryDetails.css";
import Layout from "../Layout/Layout";
import Heading from "../Heading/Heading";
import Blog from "./../Landing/Blog/Blog";
import HeroBlog from "./../Landing/HeroBlog/HeroBlog";
import { Link } from "gatsby";

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

interface sideBlogsType {
  category: string;
  title: string;
  date: string;
  slug: string;
}

interface CategoryPropsTypes {
  name: string;
  posts: blogDetailsType[];
}

const CategoryDetails: React.FC<CategoryPropsTypes> = ({ name, posts }) => {
  let count = 0;

  let sideBlogs = [];

  posts.slice(0, 3).map((post) => {
    let sideBlog = {
      title: post.title,
      date: post.createdAt,
      category: post.category,
      slug: post.slug,
    };

    sideBlogs.push(sideBlog);
  });

  return (
    <Layout>
      <Heading
        title={name}
        style={{ fontSize: "1.4rem", textTransform: "uppercase" }}
      />
      {posts &&
        posts.map((post) => {
          const { id, title, category, slug, createdAt, blogImage } = post;
          count++;

          return (
            <div key={id}>
              <Blog
                title={title}
                category={category}
                slug={slug}
                createdAt={createdAt}
                imageSrc={blogImage.fluid.src}
              />
              <Link className="hero-link" to={`/blogs/${slug}`}>
                <HeroBlog
                  title={title}
                  category={category}
                  content="Engaging customers on social media is not an easy task. It requires
              the right strategy, a deep understanding of your audience, and
              content output that aligns with this understanding. If you're still
              struggling with engaging your audience ..."
                  slug={slug}
                  sideBar={count <= 1 ? true : false}
                  sideBarTitle="Latest Posts"
                  date={createdAt}
                  sideBlogs={sideBlogs}
                  imageSrc={blogImage.fluid.src}
                />
              </Link>
            </div>
          );
        })}
    </Layout>
  );
};

export default CategoryDetails;
