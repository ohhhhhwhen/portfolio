import React from "react";
import "./intro.css";
import img1 from "../../img/IMG4.PNG";

function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Owen Chanthala</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">App Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Freelance Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Fashion Connoisseur</div>
            </div>
          </div>
          <p className="i-desc">
            Full-Stack Web/App Developer striving for creative outlooks within
            applications. Demonstrating developed skills in REACT/REACT NATIVE,
            HTML, CSS, Javascript, Node, API, MONGODB and responsive web design.
            Approaching programming challenges from my perspective and
            collaborating with others to create defined applications. Ready to
            develop and further my learning hands on. Positioned well to provide
            unique perspectives on how users interact with websites and software
            platforms by leveraging my background in customer service and being
            a customer myself.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={img1} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default intro;
