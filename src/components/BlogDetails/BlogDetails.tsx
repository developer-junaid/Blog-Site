import React from "react";
import "./blogDetails.css";
import Layout from "./../Layout/Layout";
import Newsletter from "./../Landing/Newsletter/Newsletter";
import Heading from "../Heading/Heading";
import Author from "./Author/Author";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

interface blogDetailsPropsType {
  title: string;
  createdAt: string;
  imageSrc: string;
  content: string;
  likes: number;
  author: string;
}

const BlogDetails: React.FC<blogDetailsPropsType> = ({
  title,
  createdAt,
  imageSrc,
  content,
  likes,
  author,
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
      <div className="blog-details-container">
        <div className="main-img">
          <img src={imageSrc} alt="" />
        </div>
        <Heading title={title} style={{ width: "60vw", margin: "3rem auto" }} />
        <div className="content">
          {documentToReactComponents(contentJSON, RICHTEXT_OPTIONS)}
        </div>
      </div>
      <Author author={author} likes={likes} />
      <Newsletter style={{ marginTop: "1rem", padding: "1rem" }} />
    </Layout>
  );
};

export default BlogDetails;
