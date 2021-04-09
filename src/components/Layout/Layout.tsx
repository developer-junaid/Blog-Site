import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
}

export default ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>TechBerg</title>
        <meta
          name="description"
          content="Tech Berg Blog Website Template using Gatsby"
        />
      </Helmet>
      <Navbar />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
};
