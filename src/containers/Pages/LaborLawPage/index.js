import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";

import SingleContentAreaLabourLaw from "../../../components/SingleContentAreaLabourLaw";

// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/labourlaw.png";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Labour Law" }];


const SinglePortfolioPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Labour Law"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <div className="singleArea singlePortfolioArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <SingleContentAreaLabourLaw
                className="singleContentArea"
                image={single}
              />
            </div>
            <div className="col-lg-4 col-12">
              <aside>
              
                <div className="singleContentImg ">
                  
                  <img src={single} alt="Labour Law" />
                </div>
                <hr/>
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
export default SinglePortfolioPage;
