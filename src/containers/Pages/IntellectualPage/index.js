import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import IntellectualPropertyContent from "../../../components/IntellectualPropertyContent";
import MetaTags from "../../../components/Scripts/HelmetPage";
import config from "../../../config.json";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/property.jpg";
// images
import "./style.scss";
const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Intellectual Property" }];

const Intellectual = () => {
  return (
    <Fragment>
      <MetaTags title={"Intellectual Property"} description={config.homedescription} imageurl={single} imagealt={"Intellectual Property"} keywords={"Intellectual Property, Land, Legal issue in land, property name change"} />
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="Intellectual Property" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="singleArea singlePortfolioArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <IntellectualPropertyContent className="singleContentArea" image={single} />
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <div className="singleContentImg ">
                  <img src={single} alt="Intellectual Property Copyright" />
                </div>
                <hr />
                <CetagorySidebar title="Category" className="cetagoryWrap" />
              </aside>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default Intellectual;
