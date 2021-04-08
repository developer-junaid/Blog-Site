import React from "react";
import Blogs from "./Blogs/Blogs";
import Categories from "./Categories/Categories";
import Newsletter from "./Newsletter/Newsletter";
import Hero from "./Hero/Hero";
import "./landing.css";
import HeroBlog from "./HeroBlog/HeroBlog";
import CategorySection from "./CategorySection/CategorySection";

interface blogType {
  node: {
    id: string;
    category: string;
    slug: string;
    likes: number;
    title: string;
    createdAt: string;
    author: string;
    blogImage: { fluid: { src: string } };
    content: {};
  };
}

interface sideBlogsType {
  category: string;
  title: string;
  date: string;
  slug: string;
}

interface landingPropsType {
  blogs: blogType[];
}

const Landing: React.FC<landingPropsType> = ({ blogs }) => {
  // Filter Side Bar Blogs for Landing
  const sideBlogs: sideBlogsType[] = [];

  blogs.slice(0, 6).map((blog) => {
    let sideBlog: sideBlogsType = {
      title: blog.node.title,
      date: blog.node.createdAt,
      category: blog.node.category,
      slug: blog.node.slug,
    };

    sideBlogs.push(sideBlog);
  });

  // Filter Data for Hero Blog on Landing
  let heroBlogData = blogs.filter(
    (blog) => blog.node.slug === "customer-engagement"
  );

  return (
    <div className="homepage-container">
      {/* For Mobile */}
      <Hero />
      <Categories />
      <Blogs blogs={blogs} />

      {/* For Desktop */}
      <HeroBlog
        title={heroBlogData[0].node.title}
        sideBar
        id={"hero-img"}
        category={heroBlogData[0].node.category}
        content="Engaging customers on social media is not an easy task. It requires
              the right strategy, a deep understanding of your audience, and
              content output that aligns with this understanding. If you're still
              struggling with engaging your audience ..."
        slug={heroBlogData[0].node.slug}
        sideBarTitle="More Featured"
        date={heroBlogData[0].node.createdAt}
        sideBlogs={sideBlogs}
      />
      <CategorySection blogs={blogs} />

      <Newsletter style={{ width: "60%" }} />
    </div>
  );
};

export default Landing;
