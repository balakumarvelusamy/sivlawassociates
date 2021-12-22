import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";

import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import BlogArea from "../../../components/BlogArea";

import SingleContentAreaCyberLaw from "../../../components/SingleContentAreaCyberLaw";

// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/cyber.jpeg";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "All Posts" }];

const CyberLawPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="All Recent Blog Post" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <BlogArea className="blogArea" title="Latest Post" subTitle="From Our Blog " />

      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default CyberLawPage;