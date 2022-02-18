import React from "react";
import "./contact.css";
import linkedin from "../../img/Linkedin.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">Email:</div>
            <a
              className="c-info-item link"
              href="mailto:owenchanthala@gmail.com"
            >
              owenchanthala@gmail.com
            </a>
            {/* <div className="c-info-item">owenchanthala@gmail.com</div> */}
            <div className="c-info-item">LinkedIn:</div>
            <a href="https://www.linkedin.com/in/owen-chanthala/">
              <img className="c-icon" src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
