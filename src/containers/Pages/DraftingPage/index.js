import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import CetagorySidebar from "../../../components/CetagorySidebar";
import FooterArea from "../../../components/FooterArea";
import MetaTags from "../../../components/Scripts/HelmetPage";
import config from "../../../config.json";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import single from "../../../images/practice/drafting.jpg";

import "./style.scss";
import DrafingContent from "../../../components/DrafingContent";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Drafting , Pleading & Conveyancing" }];

const Drafting = () => {
  return (
    <Fragment>
      <MetaTags title={"Drafting , Pleading & Conveyancing"} description={config.homedescription} imageurl={single} imagealt={"Drafting"} keywords={"drafting,Pleading & Conveyancing"} />
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="Drafting , Pleading & Conveyancing" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="singleArea singlePortfolioArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <DrafingContent className="singleContentArea" image={single} />
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <div className="singleContentImg ">
                  <img src={single} alt="Drafting , Pleading & Conveyancing" />
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
export default Drafting;
