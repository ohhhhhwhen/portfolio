import React from "react";
import "./about.css";
import img1 from "../../img/IMG3.PNG";

function about() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={img1} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm an evolving engineer working on my ways to perfect my coding
          skills.
        </p>
        <p className="a-desc">
          Born in California and raised right beside the San Diego Padres. My
          whole life I was surrounded by fast growing technology and if I was
          lucky enough the newest nintendo device. Knowing how applications work
          has always fascinated me and being a dev, I can now visualize how each
          function or style is programmed.
        </p>
      </div>
    </div>
  );
}

export default about;
