import React from "react";
import "../../App.css";
import "./Experience.css";
import atom from "../../img/atom.png";
import css from "../../img/css.png";
import c_sharp from "../../img/c_sharp.png"
import excel from "../../img/excel.png"
import firebase1 from "../../img/firebase1.png"
import html_5 from "../../img/html_5.png"
import js from "../../img/js.png"
import mysql from "../../img/mysql.png"
import nodejs from "../../img/nodejs.png"
import photoshop from "../../img/photoshop.png"
import php from "../../img/php.png"
import premiere_pro from "../../img/premiere_pro.png"
import typescript from "../../img/typescript.png"
import unity from "../../img/unity.png"

const Experience = () => {

  return (
    <div className="experience" id='experience'>

      {/* -----heading----- */}

      <div className="heading-container">
        <div className="heading-board">
          <img src={atom} alt="" className="icon" />
          <h2>Experience</h2>
        </div>
      </div>

      {/* -----main----- */}
      <div className="ex-main-container">

        {/* ---- frontend-area----*/}
        <div className="ex-frontend-container">
        <h2>Frontend skills</h2>
        <ul>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> メンテナンスしやすい美しいコードの書き方を模索中。</p>
            <h5>HTML</h5>
            <img src={html_5} alt="html_5 icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> 3カラムも対応できます。Tailwindcssを勉強中です。</p>
            <h5>CSS</h5>
            <img src={css} alt="css icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> ECサイトなどの本格的なアプリ開発ができるようになってきました。</p>
            <h5>Javascript</h5>
            <img src={js} alt="Javascript icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi">  type:anyを使わずに開発することが困難なレベル</p>
            <h5>Typescript</h5>
            <img src={typescript} alt="Typescript icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> ReduxやReacthooksの長所短所を理解して使い分けできるようになりました。</p>
            <h5>React</h5>
            <img src={atom} alt="React icon" />
          </li>
        </ul>
        </div>

        {/* ---- backend-area ---- */}
        <div className="ex-backend-container">
        <h2>Backend skills</h2>
        <ul>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> REST APIを叩けるぐらいのレベル感です</p>
            <h5>Node.js</h5>
            <img src={nodejs} alt="Nodejs icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> Progateで基礎を学びました。</p>
            <h5>PHP</h5>
            <img src={php} alt="PHP icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi">ドットインストールで基礎を学びました。</p>
            <h5>MySQL</h5>
            <img src={mysql} alt="MySQL icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi">Firebaseの主要な機能を使えます。</p>
            <h5>Firebase</h5>
            <img src={firebase1} alt="Firebase icon" />
          </li>
        </ul>
        </div>

        {/* ---- other-skills-area ---- */}
        <div className="ex-otherskills-container">
        <h2>Other skills</h2>
        <ul>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> 1時間尺の脱出ゲームをC#とUnityで作成しました。</p>
            <h5>C#</h5>
            <img src={c_sharp} alt="C# icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> 上記に同じ。Blenderで3Dモデル制作も少しだけやっていました。</p>
            <h5>Unity</h5>
            <img src={unity} alt="Unity icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> PremiereProで短編映画を3本編集しました。</p>
            <h5>PremierePro</h5>
            <img src={premiere_pro} alt="Premiere_pro icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> 最低限扱えます。</p>
            <h5>Photoshop</h5>
            <img src={photoshop} alt="Photoshop icon" />
          </li>
          <li>
            <div className="ex-graph"/>
            <div className="ex-inner-graph"/>
            <p className="fukidashi"> 最低限扱えます。VBAを少しだけ勉強したことがあります。</p>
            <h5>Excel</h5>
            <img src={excel} alt="Excel icon" />
          </li>
        </ul>
        </div>
      </div>
    </div>

  );
};

export default Experience;