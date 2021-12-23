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
      <div>
        <svg id="visual" viewBox="0 0 1920 200" width="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect x="0" y="0" width="1920" height="200" fill="#272c3f"></rect>
          <path d="M0 104L53.3 108.2C106.7 112.3 213.3 120.7 320 131.5C426.7 142.3 533.3 155.7 640 151.5C746.7 147.3 853.3 125.7 960 126.7C1066.7 127.7 1173.3 151.3 1280 162.3C1386.7 173.3 1493.3 171.7 1600 161.8C1706.7 152 1813.3 134 1866.7 125L1920 116L1920 201L1866.7 201C1813.3 201 1706.7 201 1600 201C1493.3 201 1386.7 201 1280 201C1173.3 201 1066.7 201 960 201C853.3 201 746.7 201 640 201C533.3 201 426.7 201 320 201C213.3 201 106.7 201 53.3 201L0 201Z" fill="#131313"></path>
        </svg>
      </div>
      <FooterArea />
    </Fragment>
  );
};
export default CyberLawPage;
