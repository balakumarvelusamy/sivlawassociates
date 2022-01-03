import React from "react";

import "react-modal-video/scss/modal-video.scss";
import "./style.scss";

const About = ({ subTitle, title, className, pragraphs, images, imagesmadurai, orderLast }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className={orderLast ? `${orderLast} col col-lg-4` : "col col-lg-4"}>
            <div className="aboutContent">
              {subTitle && <span>{subTitle}</span>}
              <h2>{title}</h2>
              {pragraphs.map((pragraph, i) => (
                <p key={i}>{pragraph.text}</p>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aboutImageWrap1">
              <a href="http://www.hcmadras.tn.nic.in/" target="blank">
                <h5>Madras High Court</h5>
                <img src={images} height="250" alt="chennai highcourt" href="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aboutImageWrap1">
              <h5>Madurai Bench of Madras High Court</h5>
              <a href="http://www.hcmadras.tn.nic.in/mduhist.html" target="blank">
                <img src={imagesmadurai} height="250" alt="madurai high court" />
              </a>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
};
export default About;
