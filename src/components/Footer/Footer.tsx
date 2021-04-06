import React from "react";
import "./footer.css";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

// Navbar Containing Links to pages
export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <hr />
        <p>
          Developed by: <span>Junaid Qureshi</span>
        </p>
        <div className="icons-container">
          <a href="https://www.facebook.com/JunaidQureshi6/">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/developer-junaid/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/developer-junaid">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}
