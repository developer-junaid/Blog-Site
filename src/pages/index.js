import { graphql } from "gatsby";
import React, { useState } from "react";
import Landing from "../components/Landing/Landing";
import Layout from "../components/Layout/Layout";

export default (props) => {
  const { data } = props;
  let blogs = data.allContentfulBlog.edges;

  return (
    <Layout>
      <Landing blogs={blogs} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulBlog {
      edges {
        node {
          id
          category
          title
          slug
          createdAt(fromNow: true)
          author
          likes
          content {
            raw
          }
          blogImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
