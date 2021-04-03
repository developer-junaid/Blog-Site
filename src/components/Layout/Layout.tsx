import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
