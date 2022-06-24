import React from "react";
import TitleLogo2 from "../../img/TitleLogo2.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import user from "../../img/user.png";
import portfolio from "../../img/portfolio.png";
import graduationCap from "../../img/graduationCap.png";
import rating from "../../img/rating.png";
import letter from "../../img/letter.png";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {

  return (
    <div className="header" id="header">
      <div className="top-padding-box" />
      <div className="side-icon-container">
        <a href="https://github.com/TatsumiP" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="my Github" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="my Instagram" />
        </a>
      </div>

      {/* title */}
      <div className="title">
        <img src={TitleLogo2} alt="TitleLogo" />
        <h2>Reactエンジニアのポートフォリオサイト</h2>
      </div>

      {/* toggle-button */}
      <div className="toggle-menu">
        <input type="checkbox" id="toggle-check" />
        <label id="toggle-button" for="toggle-check" ><span></span></label>

        {/* navbar */}
        <div id="navbar">
          <ul>
            <li>
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
                <img src={user} alt="" />
                <h3>AboutMe</h3>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                <img src={portfolio} alt="" />
                <h3>Portfolio</h3>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="experience" spy={true} smooth={true}>
                <img src={graduationCap} alt="" />
                <h3>Experience</h3>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="testimonial" spy={true} smooth={true}>
                <img src={rating} alt="" />
                <h3>Testimonial</h3>
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <img src={letter} alt="" />
                <h3>Contact</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;