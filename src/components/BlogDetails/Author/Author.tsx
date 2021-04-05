import React from "react";
import "./author.css";
import Heading from "../../Heading/Heading";
import JunaidImage from "../../../assets/images/author/author.jpg";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

interface AuthorPropsType {
  author: string;
  likes: number;
}

const Author: React.FC<AuthorPropsType> = ({ author, likes }) => {
  return (
    <div className="author-section">
      <p>Author</p>
      <div className="author-image-section">
        <div className="left-line"></div>
        <div className="author-img">
          <img src={JunaidImage} alt="" />
        </div>
        <div className="right-line"></div>
      </div>
      <Heading title={author} style={{ marginTop: 0 }} />
      <div className="author-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit
          parturient quis dapibus massa eget cursus. Sit sed tellus facilisis
          tortor massa, ultrices cursus aliquam. Iaculis commodo viverra
          habitasse egestas dolor feugiat donec. Vulputate et interdum posuere
          eu tristique venenatis etiam vel.
        </p>
      </div>
      <div className="icons">
        <div className="likes">
          <span className="icon">
            <FaHeart />
          </span>
          <span className="count">120</span>
        </div>
        <div className="social-media">
          <span className="icon">
            <FaFacebook />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Author;
