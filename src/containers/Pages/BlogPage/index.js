import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";

import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import BlogArea from "../../../components/BlogArea";

import SingleContentAreaCyberLaw from "../../../components/SingleContentAreaCyberLaw";
import config from "../../../config.json";
import MetaTags from "../../../components/Scripts/HelmetPage";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/cyber.jpeg";
import Whatsapp from "../../../components/Whatsapp";
import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "All Posts" }];

const CyberLawPage = () => {
  return (
    <Fragment>
      <MetaTags title={"Siva Law Assocaites | Blog"} description={config.blogdescription} imageurl={config.blogimageurl} imagealt={config.name} keywords={""} />
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="All Recent Blog Post" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <BlogArea className="blogArea" title="Latest Post" subTitle="From Our Blog" category="" />
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
      <Whatsapp />
    </Fragment>
  );
};
export default CyberLawPage;
