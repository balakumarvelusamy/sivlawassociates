import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import SearchSidebar from "../../../components/SearchSidebar";
import RecentPosts from "../../../components/RecentPosts";
import Portfolio from "../../../components/Portfolio";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/3.jpg";
// images
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";
import "./style.scss";
import TaxContent from '../TaxPage/TaxContent'

const breadcumbMenu = [{ name: "Home", route: "/" },{name : 'Area of Practice' , route:'/'}, { name: "Tax" }];

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
];

const Tax = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Tax"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />
      <div className="singleArea singlePortfolioArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <TaxContent
                className="singleContentArea"
                image={single}
              />
            </div>
            <div className="col-lg-4 col-12">
              <aside>
              
                <div className="singleContentImg ">
                  
                  <img src={single} alt="" />
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
export default Tax;
