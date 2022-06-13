import React from "react";
import "../../App.css";
import "./Experience.css";
import atom from "../../img/atom.png"

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
        <ul>
          <li>
            <div className="circle">1+</div>
            <span>years</span>
            <span>Experience</span>
          </li>
          <li>
            <div className="circle">0+</div>
            <span>completed</span>
            <span>Projects</span>
          </li>
          <li>
            <div className="circle">5+</div>
            <span>companies</span>
            <span>Work</span>
          </li>
          <li>

            <div className="circle">0</div>
            <span>companies</span>
            <span>Work</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;