import React from "react";
import { Link } from "gatsby";
import "./navbar.css";
import MenuIcon from "./menu.svg";

// Navbar Containing Links to pages
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <span>Tech</span>Berg
      </Link>
      <button className="menu-btn">
        <img src={MenuIcon} alt="menu" className="menu-icon" />
      </button>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link> */}
    </div>
  );
}
