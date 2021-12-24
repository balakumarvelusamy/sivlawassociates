import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import config from "../../config.json";
import Form from "../Form";
const ScrollToTop = (props) => {
  const [stick, setStick] = useState(false);
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    var position = window.pageYOffset;

    const scrollHandler = () => {
      let scrollPos = window.pageYOffset;
      if (scrollPos < 200) {
        setStick(true);
      } else if (scrollPos < position) {
        setStick(true);
      } else {
        setStick(true);
      }
      position = scrollPos;
    };

    window.addEventListener("scroll", function () {
      scrollHandler();
    });
    return () => {
      window.removeEventListener("scroll", function () {
        scrollHandler();
      });
    };
  }, [stick]);

  return (
    <div className=" bordered">
      <input lassName={`scroll-top ${stick ? "show" : ""}`} type="checkbox" id="check" />{" "}
      <label class="chat-btn" for="check">
        {" "}
        <i class="fa fa-commenting-o comment"></i> <i class="fa fa-close close"></i>{" "}
      </label>
      <div class="wrapper">
        <div class="header">
          <h6>Contact us. Share your details.</h6>
        </div>
        <div class="text-center p-2"></div>
        <div class="chat-form">
          <Form addressInfo={true} />
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;
