import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import Whatsapp from "../../../components/Whatsapp";
import Form from "../../../components/Form";
import SocialShare from "../../../components/SocialShare";
import config from "../../../config.json";
import MetaTags from "../../../components/Scripts/HelmetPage";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <MetaTags title={"Siva Law Assocaites | Contact"} description={config.contactdescription} imageurl={config.contactimageurl} imagealt={config.name} keywords={""} />
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="Contact" breadcumbMenu={breadcumbMenu} background={breadcumb} />

      <div className="contactusPageArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contactUsInfo">
                <h3>Our Contacts</h3>
                <h4>Head Office</h4>
                <span>Old No. 150 & New no. 309,1st Floor,Linghi Chetty Street,</span>
                <span>Parrys,Chennai-600 001</span>

                <h4>High Court Of Madras & Madurai bench</h4>
                <span>Suthinthira Nagar, 1st Street, </span>
                <span>Othakadai,</span>
                <span>Madurai - 625107</span>

                <h4>Chennai Branch</h4>
                <span>No. 5, Jasmine Street, Blooming Garden, </span>
                <span>Mugalivakkam,</span>
                <span>Chennai – 600 125</span>
                <div className="py-2">
                  <h5>
                    {" "}
                    <a className="text-dark" href="mailto:sivalawassociates@gmail.com">
                      <i class="fa fa-envelope px-2 "></i>
                      sivalawassociates@gmail.com
                    </a>
                  </h5>
                  <h5>
                    {" "}
                    <a className="text-dark" href="https://api.whatsapp.com/send?phone=919965449000" target="blank">
                      <i class="fa fa-whatsapp px-2 text-success "></i>
                      <b>+91-9965449000 </b> (Whats app - Advocate Sivakumar)
                    </a>
                  </h5>
                  <h5>
                    {" "}
                    <a className="text-dark" href="https://api.whatsapp.com/send?phone=919965446000" target="blank">
                      <i class="fa fa-whatsapp px-2 text-success "></i>
                      <b>+91-9965446000</b> (Whats app - Advocate Rekha)
                    </a>
                  </h5>
                  <h5>
                    <a className="text-dark" href="Tel:+919965449000">
                      <i class="fa fa-phone px-2 "></i>
                      <b> +91-9965449000 </b>(Call Us)
                    </a>
                  </h5>
                </div>
                <div>
                  <SocialShare />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contactUSForm">
                <h3>Contact Us</h3>
                <Form addressInfo={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg id="wave" viewBox="0 0 1440 127" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#272c3f" d="M0,91L40,78C80,65,160,39,240,26C320,13,400,13,480,23.8C560,35,640,56,720,62.8C800,69,880,61,960,67.2C1040,74,1120,95,1200,99.7C1280,104,1360,91,1440,82.3C1520,74,1600,69,1680,71.5C1760,74,1840,82,1920,84.5C2000,87,2080,82,2160,73.7C2240,65,2320,52,2400,45.5C2480,39,2560,39,2640,45.5C2720,52,2800,65,2880,73.7C2960,82,3040,87,3120,86.7C3200,87,3280,82,3360,80.2C3440,78,3520,78,3600,71.5C3680,65,3760,52,3840,47.7C3920,43,4000,48,4080,56.3C4160,65,4240,78,4320,82.3C4400,87,4480,82,4560,84.5C4640,87,4720,95,4800,82.3C4880,69,4960,35,5040,30.3C5120,26,5200,52,5280,54.2C5360,56,5440,35,5520,28.2C5600,22,5680,30,5720,34.7L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
        </svg>
      </div>
      <NewsLetter className="newsLetterArea" />

      <FooterArea />
      <Whatsapp />
    </Fragment>
  );
};
export default ContactPage;
