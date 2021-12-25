import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import Portfolio from "../../../components/Portfolio";
import ContactArea from "../../../components/ContactArea";
import config from "../../../config.json";
import MetaTags from "../../../components/Scripts/HelmetPage";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import team from "../../../images/Attorneys-single/1.png";
import portfolio1 from "../../../images/studies/1.jpg";
import portfolio2 from "../../../images/studies/2.jpg";
import portfolio3 from "../../../images/studies/3.jpg";

import "./style.scss";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Attorneys", route: "/attorneys" }, { name: "Attorneys Details" }];
const teamMembarInfo_ChandraSekar = [
  { level: "Positon: ", text: "District & Sessions Judge(Retd)" },
  { level: "Education: ", text: "BA, BL" },
  { level: "Experience: ", text: "I worked as a District Judge, I had been rendered my service of 33 years in judicial service and I had completed my service and started practising as an Advocate before the Supreme court of India and High Court of Madras and Madurai Bench." },
];
const teamMembarInfo_Sivakumar = [
  { level: "Positon: ", text: "Advocate" },
  { level: "Education: ", text: "BA, BL" },
  { level: "Experience: ", text: "I worked as a Legal Assistant with Hon’ble Justice at High Court of Madras for two years. Later, I practiced as an Advocate in the High Court of Madras and various Tribunals including the Consumer Court and the DRT in the Law Chambers of Senior Counsel. Where I drafted a variety of agreements including Sale-purchase Agreement, will, Indemnity bond etc.; represented clients before the High Court of Madras, Debt Recovery Tribunal, Consumer Forum, SEBI and other tribunals; conducted legal research for a variety of matters including company Law matters, arbitration, SARFAESI Act, etc.; drafted writ petitions and other to be filed before the High Court of Madras & Madurai Bench and other Courts and Tribunals; conducted case research for various matters including writs, consumer disputes, arbitration proceedings, property law, civil law and negotiable instruments. Currently I have established and registered my own firm Siva Law Associates Where I deal with all matters relating to litigation as well as non-litigation." },
];
const teamMembarInfo_Rekha = [
  { level: "Positon: ", text: "Advocate" },
  { level: "Education: ", text: "BA, BL" },
  { level: "Experience: ", text: "I worked as a legal assistant with the chambers of Senior Counsels before the High Court of Madras and Madurai Bench, Consumer Forum, Debt Recovery Tribunal. Where I conducted various researches including Company Law and Arbitration matters and Drafted a variety of documents including Sale Purchase Agreement, Sale Deeds, Mortgage Deeds, Will, Indemnity bonds etc.., further I drafted Writ petitions, Criminal petitions to be filed before the High Court and Family Disputes before the Family Court. Currently I have established and Registered my own firm in the name of SIVA ASSOCIATES Where I’m dealing with various Litigation matters before the High Court both Civil and Criminal , CLB , SEBI , DRT , DRAT and Family Litigations matters before the Family Courts." },
];
const teamContents = ["Admization Institute of Law andTechnology, Juzment School of Management,Cambridge", "Academy University School of Law, Boston, MA", "The Syntify High School Of New York", "Education & Court Admissions"];

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
];

const SingleTeamPage = () => {
  return (
    <Fragment>
      <MetaTags title={"Siva Law Assocaites | Attorneys"} description={config.homedescription} imageurl={config.attoryimageurl} imagealt={config.name} keywords={"Sivakumar, Rekha"} />
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="Our Attorneys" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="singleTeamArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="singleTeamImgWrap">
                    <div className="singleTeamImg">
                      <img src={team} alt="" />
                    </div>
                    <h4>S.Chandrasekaran</h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="singleTeamContent">
                    {/* <h4>Important Information</h4> */}
                    <ul className="teamMembarInfo">
                      {teamMembarInfo_ChandraSekar.map((teamInfo, i) => (
                        <li key={i}>
                          <span>{teamInfo.level}</span>
                          {teamInfo.text}
                        </li>
                      ))}
                    </ul>
                    <ul className="socialShare">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="singleTeamImgWrap">
                    <div className="singleTeamImg">
                      <img src={team} alt="" />
                    </div>
                    <h4>C.Sivakumar</h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="singleTeamContent">
                    {/* <h4>Important Information</h4> */}
                    <ul className="teamMembarInfo">
                      {teamMembarInfo_Sivakumar.map((teamInfo, i) => (
                        <li key={i}>
                          <span>{teamInfo.level}</span>
                          {teamInfo.text}
                        </li>
                      ))}
                    </ul>
                    <ul className="socialShare">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-12">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="singleTeamImgWrap">
                    <div className="singleTeamImg">
                      <img src={team} alt="" />
                    </div>
                    <h4>Rekha Sivakumar</h4>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="singleTeamContent">
                    {/* <h4>Important Information</h4> */}
                    <ul className="teamMembarInfo">
                      {teamMembarInfo_Rekha.map((teamInfo, i) => (
                        <li key={i}>
                          <span>{teamInfo.level}</span>
                          {teamInfo.text}
                        </li>
                      ))}
                    </ul>
                    <ul className="socialShare">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
      {/* <ContactArea className="contactArea" /> */}
      <div>
        <svg id="wave" viewBox="0 0 1440 127" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#272c3f" d="M0,91L40,78C80,65,160,39,240,26C320,13,400,13,480,23.8C560,35,640,56,720,62.8C800,69,880,61,960,67.2C1040,74,1120,95,1200,99.7C1280,104,1360,91,1440,82.3C1520,74,1600,69,1680,71.5C1760,74,1840,82,1920,84.5C2000,87,2080,82,2160,73.7C2240,65,2320,52,2400,45.5C2480,39,2560,39,2640,45.5C2720,52,2800,65,2880,73.7C2960,82,3040,87,3120,86.7C3200,87,3280,82,3360,80.2C3440,78,3520,78,3600,71.5C3680,65,3760,52,3840,47.7C3920,43,4000,48,4080,56.3C4160,65,4240,78,4320,82.3C4400,87,4480,82,4560,84.5C4640,87,4720,95,4800,82.3C4880,69,4960,35,5040,30.3C5120,26,5200,52,5280,54.2C5360,56,5440,35,5520,28.2C5600,22,5680,30,5720,34.7L5760,39L5760,130L5720,130C5680,130,5600,130,5520,130C5440,130,5360,130,5280,130C5200,130,5120,130,5040,130C4960,130,4880,130,4800,130C4720,130,4640,130,4560,130C4480,130,4400,130,4320,130C4240,130,4160,130,4080,130C4000,130,3920,130,3840,130C3760,130,3680,130,3600,130C3520,130,3440,130,3360,130C3280,130,3200,130,3120,130C3040,130,2960,130,2880,130C2800,130,2720,130,2640,130C2560,130,2480,130,2400,130C2320,130,2240,130,2160,130C2080,130,2000,130,1920,130C1840,130,1760,130,1680,130C1600,130,1520,130,1440,130C1360,130,1280,130,1200,130C1120,130,1040,130,960,130C880,130,800,130,720,130C640,130,560,130,480,130C400,130,320,130,240,130C160,130,80,130,40,130L0,130Z"></path>
        </svg>
      </div>
      <NewsLetter className="newsLetterArea" />

      <FooterArea />
    </Fragment>
  );
};
export default SingleTeamPage;
