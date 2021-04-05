import React from "react";
import "./blogDetails.css";
import Layout from "./../Layout/Layout";
import Newsletter from "./../Landing/Newsletter/Newsletter";
import Heading from "../Heading/Heading";
import Author from "./Author/Author";

interface blogDetailsPropsType {
  title: string;
  createdAt: string;
  imageSrc: string;
  content: {};
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
  console.warn(content);

  return (
    <Layout>
      <div className="blog-details-container">
        <div className="main-img">
          <img src={imageSrc} alt="" />
        </div>
        <Heading title={title} style={{ width: "60vw", margin: "3rem auto" }} />
        <div className="content">
          <div>
            More off this less hello salamander lied porpoise much over tightly
            circa horse taped so innocuously outside crud mightily rigorous plot
            life. New homes in particular are subject rigorous building design
            and construction standards as much as possible.
          </div>{" "}
          <br />
          As you’re tapping. scrolling, and swiping on your phone, you probably
          don’t give much thought to the fact that your apps are consuming
          electricity — just that they’re chipping away at your battery life.
          It’s engaging. It’s hopeful. It pushes the plot forward. Before you
          click away, disappointed that I brought up something as practical and
          boring as time management, hear me out. My intent is not to crush your
          spirits.
          <br />
          <br /> <b>Current Mobile Cloud</b>
          <br />
          <br /> The average U.S. iPhone owner uses 1–2 gigabytes of LTE data
          per month, according to some studies. That data comes at an energy
          cost that’s opaque, because we can’t see it directly. You can’t look
          to your peers in the industry, because all they’re going to tell you
          is that they are killing it, crushing it, changing the world. Example:
          Journey towards design perfection
        </div>
      </div>
      <Author author={author} likes={likes} />
      <Newsletter style={{ marginTop: "1rem", padding: "1rem" }} />
    </Layout>
  );
};

export default BlogDetails;
