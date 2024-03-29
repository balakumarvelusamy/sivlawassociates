import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import "./style.scss";

class HeroSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
    };
    return (
      <Slider className={this.props.className} {...settings}>
        {this.props.sliders.map((slider, i) => (
          <div key={i} className={`slideWrapper ${slider.images}`}>
            <div className="sliderContent">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-8">
                    <p>{slider.text}</p>
                    <h2>
                      <span>{slider.title}</span> <p>{slider.subTitle}</p>
                    </h2>
                    <div className="btnStyle btnStyle3">
                      <Link to={slider.url1}>{slider.buttoncall}</Link>{" "}
                      <Link target="_blank" to={slider.url2}>
                        {slider.buttonwhatsapp}
                      </Link>{" "}
                      <Link target="_blank" to={slider.url3}>
                        {slider.buttonemail}
                      </Link>
                      {/* <a href={slider.url}>{slider.button}</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}
export default HeroSlider;
