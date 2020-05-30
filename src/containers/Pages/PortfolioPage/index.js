import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import single from "../../../images/practice/dispute.jpg";
import CetagorySidebar from "../../../components/CetagorySidebar";


import './style.scss'
import PortfolioContent from '../../../components/Portfolio/PortfolioContent'

const breadcumbMenu = [
    { name: 'Home', route: '/' }
    ,{name : 'Area of Practice' , route:'alt-dispute-resolution'},
    { name: 'Alternate Dispute Resolution' }
]



const PortfolioPage = () => {
    return (
        <Fragment>
          <header className="headerArea">
            <HeaderTop className="headerTop" />
            <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
          </header>
          <Breadcumb
            className="breadcumbArea"
            title="Alternate Dispute Resolution"
            breadcumbMenu={breadcumbMenu}
            background={breadcumb}
          />
          <div className="singleArea singlePortfolioArea">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12">
                  <PortfolioContent
                    className="singleContentArea"
                    image={single}
                  />
                </div>
                <div className="col-lg-4 col-12">
                  <aside>
                  
                    <div className="singleContentImg ">
                      
                      <img src={single} alt="Alternate Dispute Resolution" />
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
}
export default PortfolioPage