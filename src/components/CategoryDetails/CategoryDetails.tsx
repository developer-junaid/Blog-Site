import React from "react";
import "./CategoryDetails.css";
import Layout from "../Layout/Layout";
import Heading from "../Heading/Heading";
import Blog from "./../Landing/Blog/Blog";
import HeroBlog from "./../Landing/HeroBlog/HeroBlog";

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
  console.log(name, posts);
  let count = 0;

  const sideBlogs: sideBlogsType[] = [
    {
      title: "How I went from programming with a Nokia to Samsung!",
      date: "15 May 2020",
      category: "gadgets",
      slug: "slug",
    },
    {
      title: "How I went from programming with a Nokia to Samsung!",
      date: "15 May 2020",
      category: "gadgets",
      slug: "slug",
    },
  ];

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
            <>
              <Blog
                key={id}
                title={title}
                category={category}
                slug={slug}
                createdAt={createdAt}
                imageSrc={blogImage.fluid.src}
              />
              <HeroBlog
                key={id}
                title={
                  "7 Proven Tactics to Boost Your Customer Engagement on Social Media"
                }
                category={"Gadgets"}
                content="Engaging customers on social media is not an easy task. It requires
              the right strategy, a deep understanding of your audience, and
              content output that aligns with this understanding. If you're still
              struggling with engaging your audience ..."
                slug="customer-engagement"
                sideBar={count <= 1 ? true : false}
                sideBarTitle="Latest Posts"
                date={"20 Aug 2020"}
                sideBlogs={sideBlogs}
                imageSrc={
                  "//images.ctfassets.net/8u45elrcb9jl/1J0iKQuMrGbj4McTizR2nO/e5d96b00e844226665e705a48738ce11/camera.jpg?w=800&q=50"
                }
              />
            </>
          );
        })}
    </Layout>
  );
};

export default CategoryDetails;
