import React, { useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

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
          <Link activeClassName="active-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/categories/gadgets">
            Gadgets
          </Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/categories/marketing">
            Marketing
          </Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/categories/trends">
            Trends
          </Link>
        </li>
      </ul>
      <div className="icons-container">
        <a href="https://www.facebook.com/JunaidQureshi6/">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/developer-junaid/">
          <FaLinkedin />
        </a>
      </div>
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
