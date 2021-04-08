import React from "react";
import "./blogDetails.css";
import Layout from "./../Layout/Layout";
import Newsletter from "./../Landing/Newsletter/Newsletter";
import Heading from "../Heading/Heading";
import Author from "./Author/Author";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import SideCard from "./../Landing/HeroBlog/SideCard.tsx/SideCard";

interface sideBlogsType {
  category: string;
  title: string;
  date: string;
  slug: string;
}

interface blogDetailsPropsType {
  title: string;
  createdAt: string;
  imageSrc: string;
  content: string;
  likes: number;
  author: string;
  slug: string;
  category: string;
  sideBlogs: sideBlogsType[];
}

const BlogDetails: React.FC<blogDetailsPropsType> = ({
  title,
  createdAt,
  imageSrc,
  content,
  likes,
  author,
  slug,
  category,
  sideBlogs,
}) => {
  const contentJSON = JSON.parse(content);

  // Options
  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p>
            {children}
            <br />
          </p>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a href={node.data.uri} style={{ color: "#695384" }}>
            {children}
          </a>
        );
      },
    },
  };

  return (
    <Layout>
      <div className="blog-main-wrapper">
        <div className="main-img">
          <img src={imageSrc} alt="" />
        </div>
        <Heading
          title={title}
          style={{ width: "60vw", fontSize: "1.4rem", margin: "3rem auto" }}
        />

        <div className="blog-details-wrapper">
          <div className="blog-details-container">
            <div className="content">
              {documentToReactComponents(contentJSON, RICHTEXT_OPTIONS)}
            </div>
            <Author author={author} likes={likes} />
            <Newsletter style={{ marginTop: "1rem", padding: "1rem" }} />
          </div>

          <div className="blog-side-container">
            <h3>Latest Posts</h3>

            {sideBlogs &&
              sideBlogs.slice(0, 3).map((sideBlog) => {
                return (
                  <SideCard
                    title={sideBlog.title}
                    category={sideBlog.category}
                    date={sideBlog.date}
                    slug={sideBlog.slug}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
