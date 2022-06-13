import React from "react";
import "./FirstView.css";
import FirstViewImg from "../../img/FirstViewImg.png";
import FirstViewEffect1 from "../../img/FirstViewEffect1.png";
import FirstViewEffect2 from "../../img/FirstViewEffect2.png";
import { Link } from "react-scroll";


const FirstView = () => {
    return (
        <div className="firstview" id="firstview">
            <div className="fv-background">
                <img src={FirstViewImg} alt="firstview of URYUCODE" className="fv-background-img" />
            </div>
            <div className="fv-text-back">
                <img src={FirstViewEffect1} alt="effect1 of the firstview" className="fv-effect1" />
                <img src={FirstViewEffect2} alt="effect2 of the firstview" className="fv-effect2"/>
            </div>
            <div className="fv-text">
                <h1>React Engineer</h1>
                <p>
                    ITで創る<br />
                    子どもたちの未来
                </p>
            </div>
            <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">download CV</button>
            </Link>
        </div>
    );
};

export default FirstView;