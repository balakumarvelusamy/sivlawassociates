import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/slalogo.png'
import './style.scss'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Attorneys', route: 'attorneys-single' },
            { name: 'About Us', route: 'about' },
            { name: 'Contact', route: 'contact' },
        ]
    },
    {
        title: 'Area of Practice', menus: [
            { name: 'Alternate Dispute Resolution', route: 'alt-dispute-resolution' },
            { name: 'Banking & Finance', route: 'banking-finance' },
            { name: 'Labour Law', route: 'labourlaw' },
            { name: 'Intellectual Property', route: 'intellectual' },
            { name: 'Cyber Law', route: 'cyber-law' },
            {name: 'Environmental Law', route :'env-law'},
            {name:'Drafting , Pleading & Conveyancing',route:'drafting'},
            {name:'Tax', route:'tax'}
        ]
    },
    {
        title: 'Contact Us', menus: [
            { name: 'Head Office Address' },
            { name: 'Old No. 150 & New no. 309,1st Floor,', },
            { name: 'Linghi Chetty Street,', },
            { name: 'Parrys,Chennai-600 001', },
        ]
    },
]




const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                                <p>Siva Law Associates, a law firm established in 2009, our firm consists of well experienced attorney’s dealing with variety of cases mainly civil, criminal, Bank cases & Corporate matters on behalf of clients, companies and banks.

</p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link to={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>Privacy Policy | ©  {new Date().getFullYear()} Developed by <a href="https://www.instagram.com/theuniquecreations">TheUniqueCreations.</a></span>
                            </div>
                            <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li> */}
                                    <li><a href="https://www.instagram.com/theuniquecreations"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterArea