import React from "react";
import "./Intro.css";
import atom from "../../img/atom.png";
import myimage3 from "../../img/myimage3.jpg";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";

const Intro = () => {

  return (

    <div className="intro" id="Intro">

      {/* heading area */}
      <div className="heading-container">
        <div className="heading-board">
          <img src={atom} alt="intro-heading-icon" className="icon" />
          <h2>About Me</h2>
        </div>
      </div>

      {/* flex area */}

      <div className="i-flex-area">

      {/* left text side */}

        <div className="i-left">
          <div className="i-name">
            <span>瓜生真吾</span>
            <span>
              1991年9月5日生まれの30歳。<br />
              大学中退後、小説を書きながら映画バーの
              バーテンダーとして働いてた。<br />

              2021年1月にダウン症の息子を授かった
              ことをきっかけにバーテンダーを辞め、
              育児に専念。<br />
              育児の傍ら、Reactを独学で学ぶ。<br />
              2022年に、フロントエンジニアになるため、
              就職活動を始める。<br />

              趣味は読書と映画鑑賞と料理……だが、最近は
              育児が趣味になりつつある。<br />
            </span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <a href="https://github.com/TatsumiP" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="" />
            </a>
            <img src={Instagram} alt="" />
          </div>
        </div>

        {/* right image side */}

        <div className="i-right">
          <img src={myimage3} alt="myimage" />
        </div>
      </div>
    </div>
  );
};

export default Intro;