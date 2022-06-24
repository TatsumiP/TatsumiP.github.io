import React from "react";
import "./Portfolio.css";
import "../../App.css";
import atom from "../../img/atom.png";
import noimage from "../../img/noImage.jpg";
import profile_ec from "../../img/profile_ec.png";
import Github from "../../img/github.png";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">

      {/* -----heading----- */}

      <div className="heading-container">
        <div className="heading-board">
          <img src={atom} alt="heading icon" className="icon"/>
          <h2>Portfolio</h2>
        </div>
      </div>

      {/* -----main----- */}

      <div className="pf-main-container">
        <ul>
          <li>
            <h4>オリジナル雑貨・ハンコECサイト</h4>
            <div className="module-spacer-s"/>
            <img src={profile_ec} alt="my ecsite demo" />
            <h5>説明</h5>
            <p>ReactとNode.jsで作ったECデモサイト。
              今後妻がオリジナル雑貨とイギリスの手作り雑貨をメインに実際に運用していく予定。</p>
            <h5>使用技術</h5>
            <p>React Redux Node.js Firebase
              CloudFunctions SendGridAPI StripeAPI </p>
            <a href="https://github.com/TatsumiP/ec-app" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="my Github" />
              </a>
          </li>
          <li>
            <h4>ホテル検索アプリ(楽天API)</h4>
            <div className="module-spacer-s"/>
            <img src={noimage} alt="my-app-searching-hotel" />
            <h5>説明</h5>
            <p>Reactエンジニアとして活躍するトラハックさんが開催したTypeScriptブートキャンプに参加して作ったデモアプリ</p>
            <h5>使用技術</h5>
            <p>React Redux TypeScript Node.js FIrebase
              CloudFunctions 楽天API </p>
              <a href="https://github.com/TatsumiP/ts-hotel" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="my Github" />
              </a>

          </li>
        </ul>
      </div>
    </div>



  );
};

export default Portfolio;