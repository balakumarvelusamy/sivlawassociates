import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import Service from "../../../components/Service";
import About from "../../../components/About";
import Whatsapp from "../../../components/Whatsapp";
import ServiceArea from "../../../components/ServiceArea";
import Testmonial from "../../../components/Testmonial";
import TeamMember from "../../../components/TeamMember";
import CounterArea from "../../../components/CounterArea";
import BlogArea from "../../../components/BlogArea";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
// images
import about from "../../../images/about/2.jpg";
import breadcumb from "../../../images/breadcumb/1.jpg";

import "./style.scss";

const aboutText = [{ text: "Siva Law Associates, a law firm established in 2009, our firm consists of well experienced attorney’s dealing with variety of cases mainly civil, criminal, Bank cases & corporate matters on behalf of clients, companies and banks. We also do the preparing of sale deed, other legal agreements and appearing cases for SEBI. Our motto is to provide high quality and timely service to our clients at the time, when they needed the most." }, { text: "" }];

const services = [
  {
    icon: "flaticon-parents",
    title: "Family Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-wounded",
    title: "Personal Injury",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-employee",
    title: "Business Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-thief",
    title: "Criminal Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-university-graduate-hat",
    title: "Education Law",
    content: "There are many variations of passages of Lorem ",
  },
  {
    icon: "flaticon-house",
    title: "Real Estate Law",
    content: "There are many variations of passages of Lorem ",
  },
];

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "About us" }];

const AboutPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="About Us" breadcumbMenu={breadcumbMenu} background={breadcumb} />

      <About className="aboutArea aboutAreaStyleTwo" title="About us" subTitle="We Are Expert" images={about} imagesmadurai={"http://www.hcmadras.tn.nic.in/image/mdu2a.jpg"} orderLast="order-last" videoId="XxVg_s8xAms" pragraphs={aboutText} />
      {/* <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            /> */}
      {/* <Testmonial
                className="testmonialArea pt100"
            /> */}
      {/* <CounterArea
                fullWidth={true}
                className="counterArea counterAreaStyleTwo"
            /> */}
      <TeamMember title="Qualified Attorneys " subTitle="Meet Our Experts" className="teamArea" slider={true} />
      {/* <BlogArea
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            /> */}
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
      <Whatsapp />
    </Fragment>
  );
};
export default AboutPage;
