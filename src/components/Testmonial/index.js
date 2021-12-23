import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import config from "../../config.json";

// images
import testmonial from "../../images/testimonial/testimonial.jpg";
import defaultuserimage from "../../images/testimonial/2.jpg";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const Testmonial = ({ className }) => {
  const [testimonial, setTestimonial] = useState([]);
  const [networkError, setNetworkError] = useState("");
  const getTestimonial = async () => {
    await fetch(config.service_url + "gettestimonial")
      .then((response) => response.json())
      .then((data1) => {
        if (data1.status === 200) {
          let active1 = data1.data
            .filter((filter1, index) => filter1.published === 1 && filter1.isactive === 1)
            .map((d) => {
              return d;
            });
          setTestimonial(active1);
          console.log("gettestimonial", data1.data);
        }
      })
      .catch((err) => {
        setNetworkError("Something went wrong, Please try again later!!");
        console.log("gettestimonial", err);
      });
  };

  useEffect(() => {
    getTestimonial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="testimonialImages">
              <img src={testmonial} alt="" />
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 col-md-6">
            <div className="testimonialContent">
              <span>What People Say</span>
              <h2>Client Testimonial</h2>
              <Slider className="testmonialSlider" {...settings}>
                {testimonial.length > 0 &&
                  testimonial.map((slider, i) => (
                    <div key={i} className="slideItem">
                      <div dangerouslySetInnerHTML={{ __html: slider.t_content }} />

                      <div className="thumbWrap">
                        <div className="thumbImg">
                          <img src={slider.t_image === undefined || slider.t_image === "" ? defaultuserimage : slider.t_image} alt="" />
                        </div>
                        <div className="imgContent">
                          <h4>{slider.t_title}</h4>
                          <span>{slider.t_description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testmonial;
