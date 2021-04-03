import React from "react";
import "./footer.css";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

// Navbar Containing Links to pages
export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="icons-container">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
      </div>
      <p>
        Developed by: <span>Junaid Qureshi</span>
      </p>
    </div>
  );
}
