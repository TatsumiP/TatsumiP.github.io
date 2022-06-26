import React from "react";
import "./FirstView.css";
import FirstViewImg from "../../img/FirstViewImg.png";
import FirstViewEffect from "../../img/FirstViewEffect.png";

const FirstView = () => {
    return (
        <div className="firstview" id="firstview">
            <div className="fv-background">
                <img src={FirstViewImg} alt="firstview of URYUCODE" className="fv-background-img" />
            </div>
            <div className="fv-text-back">
                <img src={FirstViewEffect} alt="effect of the firstview" className="fv-effect" />
                {/* <img src={FirstViewEffect1} alt="effect1 of the firstview" className="fv-effect1" />
                <img src={FirstViewEffect2} alt="effect2 of the firstview" className="fv-effect2" /> */}
            </div>
            <div className="fv-text-container">
                <h1 className="fadein">
                    ITでつなげる<br />
                    SDGsでつながる
                </h1>
            </div>
            <div className="fv-button-container">
                <a href="https://tatsumip.github.io/static/media/myresume.pdf" target="_blank" download="瓜生真吾_履歴書+職務経歴書+スキルシート">
                    <button className="fv-button">download CV</button>
                </a>
            </div>
        </div>
    );
};

export default FirstView;