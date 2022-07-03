import React from "react";
import "./Intro.css";
import atom from "../../img/atom.png";
import myimage1 from "../../img/myimage1.jpg";
import myimage3 from "../../img/myimage3.jpg";
import mysonimage from "../../img/mysonimage.jpeg";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import { Link } from "react-scroll";

const Intro = () => {

  return (

    <div className="intro" id="intro">

      {/* ----- heading area ----- */}
      <div className="heading-container">
        <div className="heading-board">
          <img src={atom} alt="heading-icon" className="icon" />
          <h2>About Me</h2>
        </div>
      </div>

      {/* ----- first-flex-area ----- */}
      <div className="i-first-wrapper">
        <div className="i-flex-container">

          {/* left text side */}
          <div className="i-small-container">
            <img src={myimage3} alt="myimage" />
          </div>

          {/* right image side */}
          <div className="i-large-container">
            <div className="i-la-co-wrapper">
              <span>
                瓜生真吾。<br/>
                1991年9月5日生まれの30歳。<br/>
                育児の傍ら、Reactを独学で習得。<br/>
                <br/>
                長所は自走力。<br/>
                趣味は読書と映画鑑賞と料理……だが、最近は育児が趣味になりつつある。
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ----- second-flex-area ----- */}
      <div className="i-second-wrapper">
        <div className="i-flex-container">

          {/* left text side */}
          <div className="i-large-container">
            <div className="i-la-co-wrapper">
              <span>
                大学中退後、小説を書きながら映画バーの
                バーテンダーとして働いてた。<br/>
                <br/>
                2021年1月にダウン症の息子を授かった
                ことをきっかけにバーテンダーを辞め、
                育児に専念。<br/>
                <br/>
                2022年に、フロントエンジニアになるため、
                就職活動を始める。<br/>
              </span>
            </div>
          </div>
          {/* right image side */}
          <div className="i-small-container">
            <img src={myimage1} alt="myimage" />
          </div>
        </div>
      </div>
      <div className="module-spacer-s"/>

      {/* ----- third-flex-area ----- */}
      <div className="i-third-wrapper">
        <div className="i-flex-container">

          {/* left text side */}
          <div className="i-small-container">
            <img src={mysonimage} alt="mysonimage" />
          </div>

          {/* right image side */}
          <div className="i-large-container">
            <div className="i-la-co-wrapper">
              <span>
              映画バーで働いていたとき、特殊なレジ作業でエーススタッフに多大な
              負荷がかかっているに疑問を感じていました。<br/>
              そこでレジの簡易的な検索機能をエクセルVBAで作成し、そのようなシステムを導入できないか社員に相談の上、社長に打診したことがありました。<br/>
              そのことがきっかけでITへの興味が生まれました。<br/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="module-spacer-s"/>
      <div className="i-button-container">
      <Link to="contact" smooth={true} spy={true}>
        <button className="button i-button">Hire me</button>
      </Link>
      </div>
      <div className="i-icons">
        <a href="https://github.com/TatsumiP" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="my Github" />
        </a>
        <img src={Instagram} alt="my Instagram" />
      </div>
    </div>
  );
};

export default Intro;