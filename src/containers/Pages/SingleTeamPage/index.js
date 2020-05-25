import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import team from '../../../images/Attorneys-single/1.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Attorneys', route: '/attorneys' },
    { name: 'Attorneys Details' }
]
const teamMembarInfo_ChandraSekar = [
    { level: 'Positon: ', text: 'District & Sessions Judge(Retd)' },
    { level: 'Education: ', text: 'BA, BL' },
    { level: 'Experience: ', text: 'I worked as a District Judge, I had been rendered my service of 33 years in judicial service and I had completed my service and started practising as an Advocate before the Supreme court of India and High Court of Madras and Madurai Bench.' },
]
const teamMembarInfo_Sivakumar = [
    { level: 'Positon: ', text: 'Advocate' },
    { level: 'Education: ', text: 'BA, BL' },
    { level: 'Experience: ', text: 'I worked as a Legal Assistant with Hon’ble Justice at High Court of Madras for two years. Later, I practiced as an Advocate in the High Court of Madras and various Tribunals including the Consumer Court and the DRT in the Law Chambers of Senior Counsel. Where I drafted a variety of agreements including Sale-purchase Agreement, will, Indemnity bond etc.; represented clients before the High Court of Madras, Debt Recovery Tribunal, Consumer Forum, SEBI and other tribunals; conducted legal research for a variety of matters including company Law matters, arbitration, SARFAESI Act, etc.; drafted writ petitions and other to be filed before the High Court of Madras & Madurai Bench and other Courts and Tribunals; conducted case research for various matters including writs, consumer disputes, arbitration proceedings, property law, civil law and negotiable instruments. Currently I have established and registered my own firm Siva Law Associates Where I deal with all matters relating to litigation as well as non-litigation.'},  
]
const teamMembarInfo_Rekha = [
    { level: 'Positon: ', text: 'Advocate' },
    { level: 'Education: ', text: 'BA, BL' },
    { level: 'Experience: ', text: 'I worked as a legal assistant with the chambers of Senior Counsels before the High Court of Madras and Madurai Bench, Consumer Forum, Debt Recovery Tribunal. Where I conducted various researches including Company Law and Arbitration matters and Drafted a variety of documents including Sale Purchase Agreement, Sale Deeds, Mortgage Deeds, Will, Indemnity bonds etc.., further I drafted Writ petitions, Criminal petitions to be filed before the High Court and Family Disputes before the Family Court. Currently I have established and Registered my own firm in the name of SIVA ASSOCIATES Where I’m dealing with various Litigation matters before the High Court both Civil and Criminal , CLB , SEBI , DRT , DRAT and Family Litigations matters before the Family Courts.' },  
]
const teamContents = [
    'Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
    'Academy University School of Law, Boston, MA',
    'The Syntify High School Of New York',
    'Education & Court Admissions',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Our Attorneys"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team} alt="" />
                                        </div>
                                        <h4>S.CHANDRASEKARAN</h4>
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
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
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
                                        <h4>C. Sivakumar</h4>
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
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
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
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <hr></hr>
          
                </div>
            </div>
         <ContactArea
                className="contactArea"
            /> 
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage