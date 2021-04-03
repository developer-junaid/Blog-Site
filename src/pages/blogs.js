import React from "react";
import { Router } from "@reach/router";
import { Link } from "gatsby";
import Blog1 from "../components/blogs/Blog1";

const Blogs = () => {
  return (
    <div>
      <div>
        <Link to="/blogs">Blogs</Link>
        <Link to="/blogs/blog1">Blog 1</Link>
      </div>

      <Router basepath="/blogs">
        <Blog1 path="blog1" />
      </Router>
    </div>
  );
};

export default Blogs;
