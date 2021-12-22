import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal } from "react-bootstrap";

import "./style.scss";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import Whatsapp from "../../../components/Whatsapp";
import Disclaimer from "../../../components/Disclaimer";
import ContactArea from "../../../components/ContactArea";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";
import maduraihc from "../../../images/about/maduraihc.jpg";
import signature from "../../../images/about/1.png";
import bottomcurve from "../../../images/about/curvebottom.png";
import curvetop from "../../../images/about/curvetop.png";
// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import portfolio4 from "../../../images/studies/4.jpg";
import portfolio5 from "../../../images/studies/5.jpg";

const aboutText = [
  {
    text: "Siva Law Associates, a law firm established in 2009, our firm consists of well experienced attorney’s dealing with variety of cases mainly civil, criminal, Bank cases & Corporate matters on behalf of clients, companies and banks.",
  },
  {
    text: "We also do the preparing of sale deed, other legal agreements and appearing cases for SEBI. Our motto is to provide high quality and timely service to our clients at the time, when they needed the most.",
  },
];

const heroSliders = [
  {
    images: "slideWrapperOne",
    title: "Providing Complete End",
    subTitle: "to End Legal Services.",
    text: "Branch: Chennai",
    button: "Contact us now",
    url: "/contact",
  },
  {
    images: "slideWrapperTwo",
    title: "We Fight For Your Justice",
    subTitle: "As Like A Friend.",
    text: "Branch: Madurai",
    button: "Contact us now",
    url: "/contact",
  },
];

const services = [
  {
    icon: "flaticon-parents",
    title: "Alternate Dispute Resolution",
    url: "/alt-dispute-resolution",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-parents",
    title: "Civil",
    url: "/civil",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-house",
    title: "Banking & Finance",
    url: "/banking-finance",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-employee",
    title: "Labour Law",
    url: "/labourlaw",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-house",
    title: "Intellectual Property",
    url: "/intellectual",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Cyber Law",
    url: "/cyber-law",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-house",
    title: "Environmental Law",
    url: "/env-law",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-house",
    title: "Drafting , Pleading & Conveyancing",
    url: "/drafting",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
  {
    icon: "flaticon-house",
    title: "Tax",
    url: "/tax",
    // content: 'It is a long established fact that a reader will be distracted by the readable content of '
  },
];

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
  { images: portfolio4, title: "Accounting issue", subtitle: "Criminal" },
  {
    images: portfolio5,
    title: "Business Accounting",
    subtitle: "Family Issue",
  },
];

const HomePageOne = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    localStorage.setItem("disclaimer_agree", "1");
    setShow(false);
  };

  const handleShow = () => {
    if (localStorage.getItem("disclaimer_agree") == "1") setShow(false);
  };

  useEffect(() => {
    {
      if (localStorage.getItem("disclaimer_agree") == "1") {
        console.log("disclaimer_agree", localStorage.getItem("disclaimer_agree"));
        setShow(false);
      } else setShow(true);
    }
  }, []);

  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea" />
      </header>
      <HeroSlider sliders={heroSliders} className="heroSliderArea" />
      {/* <Service className="serviceArea" /> */}
      <About className="aboutArea" title="About Us" images={about} imagesmadurai={maduraihc} pragraphs={aboutText} />

      <div id="disclaimermodel">
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Body>
            <Disclaimer className="portfolioArea" title="" subTitle="" portfolioItem={portfolioItem} />
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-success" onClick={handleClose} variant="primary">
              Agree
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <svg id="wave" viewBox="0 0 1440 130" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F5F5F5" d="M0,91L40,78C80,65,160,39,240,26C320,13,400,13,480,23.8C560,35,640,56,720,62.8C800,69,880,61,960,67.2C1040,74,1120,95,1200,99.7C1280,104,1360,91,1440,82.3C1520,74,1600,69,1680,71.5C1760,74,1840,82,1920,84.5C2000,87,2080,82,2160,73.7C2240,65,2320,52,2400,45.5C2480,39,2560,39,2640,45.5C2720,52,2800,65,2880,73.7C2960,82,3040,87,3120,86.7C3200,87,3280,82,3360,80.2C3440,78,3520,78,3600,71.5C3680,65,3760,52,3840,47.7C3920,43,4000,48,4080,56.3C4160,65,4240,78,4320,82.3C4400,87,4480,82,4560,84.5C4640,87,4720,95,4800,82.3C4880,69,4960,35,5040,30.3C5120,26,5200,52,5280,54.2C5360,56,5440,35,5520,28.2C5600,22,5680,30,5720,34.7L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
        </svg>
      </div>

      <ServiceArea className="ourServiceArea" title="How Can We Help You" subTitle="Area Of Practice" services={services} />

      <ContactArea className="contactArea" />

      <TeamMember title="Qualified Attorneys " subTitle="Meet Our Experts" className="teamArea" slider={true} />
      <CounterArea className="counterArea" />
      <BlogArea className="blogArea" title="Latest Post" subTitle="From Our Blog " />
      <Testmonial className="testmonialArea" />

      <div>
        <svg id="wave" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#272c3f" d="M0,60L120,65C240,70,480,80,720,71.7C960,63,1200,37,1440,35C1680,33,1920,57,2160,63.3C2400,70,2640,60,2880,51.7C3120,43,3360,37,3600,41.7C3840,47,4080,63,4320,66.7C4560,70,4800,60,5040,50C5280,40,5520,30,5760,28.3C6000,27,6240,33,6480,41.7C6720,50,6960,60,7200,55C7440,50,7680,30,7920,26.7C8160,23,8400,37,8640,48.3C8880,60,9120,70,9360,68.3C9600,67,9840,53,10080,45C10320,37,10560,33,10800,40C11040,47,11280,63,11520,66.7C11760,70,12000,60,12240,46.7C12480,33,12720,17,12960,11.7C13200,7,13440,13,13680,15C13920,17,14160,13,14400,18.3C14640,23,14880,37,15120,46.7C15360,57,15600,63,15840,66.7C16080,70,16320,70,16560,60C16800,50,17040,30,17160,20L17280,10L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
        </svg>
      </div>
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
      <Whatsapp />
    </Fragment>
  );
};
export default HomePageOne;
