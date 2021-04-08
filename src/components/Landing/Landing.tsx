import React from "react";
import Blogs from "./Blogs/Blogs";
import Categories from "./Categories/Categories";
import Newsletter from "./Newsletter/Newsletter";
import Hero from "./Hero/Hero";
import "./landing.css";
import HeroBlog from "./HeroBlog/HeroBlog";
import CategorySection from "./CategorySection/CategorySection";
import HeroImg from "../../assets/images/hero/hero-blog-image.jpg";

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
    <div className="homepage-container">
      {/* For Mobile */}
      <Hero />
      <Categories />
      <Blogs blogs={blogs} />

      {/* For Desktop */}
      <HeroBlog
        title={
          "7 Proven Tactics to Boost Your Customer Engagement on Social Media"
        }
        sideBar
        id={"hero-img"}
        category={"Gadgets"}
        content="Engaging customers on social media is not an easy task. It requires
              the right strategy, a deep understanding of your audience, and
              content output that aligns with this understanding. If you're still
              struggling with engaging your audience ..."
        slug="customer-engagement"
        sideBarTitle="Latest Posts"
        date={"20 Aug 2020"}
        sideBlogs={sideBlogs}
      />
      <CategorySection />

      <Newsletter />
    </div>
  );
};

export default Landing;
