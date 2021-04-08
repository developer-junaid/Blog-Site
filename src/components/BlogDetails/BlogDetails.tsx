import React from "react";
import "./blogDetails.css";
import Layout from "./../Layout/Layout";
import Newsletter from "./../Landing/Newsletter/Newsletter";
import Heading from "../Heading/Heading";
import Author from "./Author/Author";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import SideCard from "./../Landing/HeroBlog/SideCard.tsx/SideCard";

interface blogDetailsPropsType {
  title: string;
  createdAt: string;
  imageSrc: string;
  content: string;
  likes: number;
  author: string;
  slug: string;
  category: string;
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
}) => {
  const contentJSON = JSON.parse(content);
  console.log(contentJSON);

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
            <SideCard
              title="How I went from programming with a Nokia to Samsung!"
              category="gadgets"
              date="23 Aug 2020"
              slug="nokia-to-samsung"
            />
            <SideCard
              title="How I went from programming with a Nokia to Samsung!"
              category="gadgets"
              date="23 Aug 2020"
              slug="nokia-to-samsung"
            />
            <SideCard
              title="How I went from programming with a Nokia to Samsung!"
              category="gadgets"
              date="23 Aug 2020"
              slug="nokia-to-samsung"
            />
            <SideCard
              title="How I went from programming with a Nokia to Samsung!"
              category="gadgets"
              date="23 Aug 2020"
              slug="nokia-to-samsung"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
