import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Form from '../../../components/Form'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Contact', },
]

const ContactPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />

            <div className="contactusPageArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="contactUsInfo">
                            <h3>Our Contacts</h3>
                                <h4>Head Office</h4>
                                <span>Old No. 150 & New no. 309,1st Floor,Linghi Chetty Street,</span>
                                <span>Parrys,Chennai-600 001</span>

                                <h4>Madurai Branch</h4>
                                <span>No: 1, 5th Street,South Alagar Nagar, </span><span>K.Puthur,</span>
                                <span>Madurai – 600 007</span>

                                <h4>Chennai Branch</h4>
                                <span>No. 5, Jasmine Street, Blooming Garden, </span><span>Mugalivakkam,</span>
                                <span>Chennai – 600 125</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contactUSForm">
                                <h3>Contact Us</h3>
                                <Form
                                    addressInfo={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default ContactPage