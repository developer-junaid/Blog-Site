import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="children">{children}</div>
      <Footer />
    </div>
  );
};
