import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./style.scss";

import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import HeroSlider from "../../../components/HeroSlider";
import About from "../../../components/About";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import Whatsapp from "../../../components/Whatsapp";
import ChatBox from "../../../components/ChatBox";

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
      <Helmet>
        <title>Siva Law Associates</title>
        <meta name="title" content="Siva Law Associates" />
        <meta name="description" content="Siva Associates is a top and well known Lawyer and Advocate in Kodambakkam, Chennai and also known for Lawyers, Lawyers For Banking, Lawyers For Service Matters, Lawyers For Supreme Court and Lawyers For Writ Petition. Get access to address, contact number, photos, directions, working hours and services of Siva Associates, Kodambakkam, Chennai." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://sivalawassociates.in/" />
        <meta property="og:title" content="Siva Law Associates" />
        <meta property="og:description" content="Siva Associates is a top and well known Lawyer and Advocate in Kodambakkam, Chennai and also known for Lawyers, Lawyers For Banking, Lawyers For Service Matters, Lawyers For Supreme Court and Lawyers For Writ Petition. Get access to address, contact number, photos, directions, working hours and services of Siva Associates, Kodambakkam, Chennai." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/tucfbclouddb.appspot.com/o/SIVALAWASSOCIATES.IN%2Fslalogoo.jpg?alt=media&token=643e95c8-3674-4964-b616-ed6ea26fcb66" />

        {/* <!-- Twitter --> */}
        <meta name="title" content="Siva Law Associates - Chennai" />
        <meta name="twitter:title" content="Siva Law Associates - Chennai" />
        <meta property="twitter:card" content="Siva Associates is a top and well known Lawyer and Advocate in Kodambakkam, Chennai and also known for Lawyers, Lawyers For Banking, Lawyers For Service Matters, Lawyers For Supreme Court and Lawyers For Writ Petition. Get access to address, contact number, photos, directions, working hours and services of Siva Associates, Kodambakkam, Chennai." />
        <meta property="twitter:url" content="http://sivalawassociates.in/" />
        <meta property="twitter:title" content="Siva Law Associates" />
        <meta property="twitter:description" content="Siva Associates is a top and well known Lawyer and Advocate in Kodambakkam, Chennai and also known for Lawyers, Lawyers For Banking, Lawyers For Service Matters, Lawyers For Supreme Court and Lawyers For Writ Petition. Get access to address, contact number, photos, directions, working hours and services of Siva Associates, Kodambakkam, Chennai." />
        <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/tucfbclouddb.appspot.com/o/SIVALAWASSOCIATES.IN%2Fslalogoo.jpg?alt=media&token=643e95c8-3674-4964-b616-ed6ea26fcb66" />
        {/* <!-- keywords --> */}
        <meta name="keywords" content="Siva Associates Kodambakkam Chennai, Siva Associates contact number, Siva Associates address, crimial case, family case, leagal advice, best advocate in chennai, low cost advocate in chennai, advocate in chennai, advocate in madurai, siva Associates direction, Siva Associates photos, Siva Associates official website link, siva Associates working hours, Siva Associates services, Lawyers Kodambakkam Chennai, Lawyers For Banking Kodambakkam Chennai, Lawyers For Service Matters Kodambakkam Chennai, Lawyers For Supreme Court Kodambakkam Chennai, Lawyers For Writ Petition Kodambakkam Chennai, Labour Law Lawyers Kodambakkam Chennai" />
        <meta property="og:keywords" content="Siva Associates Kodambakkam Chennai, Siva Associates contact number, Siva Associates address, crimial case, family case, leagal advice, best advocate in chennai, low cost advocate in chennai, advocate in chennai, advocate in madurai, siva Associates direction, Siva Associates photos, Siva Associates official website link, siva Associates working hours, Siva Associates services, Lawyers Kodambakkam Chennai, Lawyers For Banking Kodambakkam Chennai, Lawyers For Service Matters Kodambakkam Chennai, Lawyers For Supreme Court Kodambakkam Chennai, Lawyers For Writ Petition Kodambakkam Chennai, Labour Law Lawyers Kodambakkam Chennai" />
      </Helmet>
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
        <svg id="wave" viewBox="0 0 1440 127" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F5F5F5" d="M0,91L40,78C80,65,160,39,240,26C320,13,400,13,480,23.8C560,35,640,56,720,62.8C800,69,880,61,960,67.2C1040,74,1120,95,1200,99.7C1280,104,1360,91,1440,82.3C1520,74,1600,69,1680,71.5C1760,74,1840,82,1920,84.5C2000,87,2080,82,2160,73.7C2240,65,2320,52,2400,45.5C2480,39,2560,39,2640,45.5C2720,52,2800,65,2880,73.7C2960,82,3040,87,3120,86.7C3200,87,3280,82,3360,80.2C3440,78,3520,78,3600,71.5C3680,65,3760,52,3840,47.7C3920,43,4000,48,4080,56.3C4160,65,4240,78,4320,82.3C4400,87,4480,82,4560,84.5C4640,87,4720,95,4800,82.3C4880,69,4960,35,5040,30.3C5120,26,5200,52,5280,54.2C5360,56,5440,35,5520,28.2C5600,22,5680,30,5720,34.7L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
        </svg>
      </div>

      <ServiceArea className="ourServiceArea" title="How Can We Help You" subTitle="Area Of Practice" services={services} />

      <ContactArea className="contactArea" />

      <TeamMember title="Qualified Attorneys " subTitle="Meet Our Experts" className="teamArea" slider={true} />
      <CounterArea className="counterArea" />
      <BlogArea className="blogArea" title="Latest Post" source="home" subTitle="From Our Blog " />
      <Testmonial className="testmonialArea" />

      <div>
        <svg id="wave" viewBox="0 0 1440 127" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#272c3f" d="M0,91L40,78C80,65,160,39,240,26C320,13,400,13,480,23.8C560,35,640,56,720,62.8C800,69,880,61,960,67.2C1040,74,1120,95,1200,99.7C1280,104,1360,91,1440,82.3C1520,74,1600,69,1680,71.5C1760,74,1840,82,1920,84.5C2000,87,2080,82,2160,73.7C2240,65,2320,52,2400,45.5C2480,39,2560,39,2640,45.5C2720,52,2800,65,2880,73.7C2960,82,3040,87,3120,86.7C3200,87,3280,82,3360,80.2C3440,78,3520,78,3600,71.5C3680,65,3760,52,3840,47.7C3920,43,4000,48,4080,56.3C4160,65,4240,78,4320,82.3C4400,87,4480,82,4560,84.5C4640,87,4720,95,4800,82.3C4880,69,4960,35,5040,30.3C5120,26,5200,52,5280,54.2C5360,56,5440,35,5520,28.2C5600,22,5680,30,5720,34.7L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
        </svg>
      </div>
      <NewsLetter className="newsLetterArea" />

      <FooterArea />
      {/* <ChatBox /> */}
      <Whatsapp />
    </Fragment>
  );
};
export default HomePageOne;
