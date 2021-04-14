import React from "react";

import "react-modal-video/scss/modal-video.scss";
import "./style.scss";

const About = ({
  subTitle,
  title,
  className,
  pragraphs,
  images,
  imagesmadurai,
  orderLast,
}) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div
            className={orderLast ? `${orderLast} col col-lg-6` : "col col-lg-6"}
          >
            <div className="aboutImageWrap">
              <a href="http://www.hcmadras.tn.nic.in/" target="blank">
                <img src={images} alt="chennai highcourt" href="" />
                <h6>Madras High Court</h6>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutContent">
              {subTitle && <span>{subTitle}</span>}
              <h2>{title}</h2>
              {pragraphs.map((pragraph, i) => (
                <p key={i}>{pragraph.text}</p>
              ))}
            </div>
            <div className="aboutImageWrap">
              <a
                href="http://www.hcmadras.tn.nic.in/mduhist.html"
                target="blank"
              >
                <img src={imagesmadurai} alt="madurai high court" />

                <h6>Madurai Bench of Madras High Court</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
