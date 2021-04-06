import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";

// Navbar Containing Links to pages
export default function Navbar() {
  // Onclick
  const [navClicked, setNavClicked] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span>Tech</span>Berg
      </Link>
      <ul className={navClicked ? "nav-links nav-active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories/gadgets">Gadgets</Link>
        </li>
        <li>
          <Link to="/categories/marketing">Marketing</Link>
        </li>
        <li>
          <Link to="/categories/trends">Trends</Link>
        </li>
      </ul>
      <button className="menu-btn" onClick={() => setNavClicked(!navClicked)}>
        {navClicked ? (
          <ImCross
            className="menu-icon"
            style={{ width: "1.2rem", height: "1.2rem", marginRight: "0.3rem" }}
          />
        ) : (
          <BiMenuAltRight className="menu-icon" />
        )}
      </button>
    </nav>
  );
}
