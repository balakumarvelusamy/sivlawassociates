import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
// import Portfolio from '../../../components/Portfolio'
import Disclaimer from '../../../components/Disclaimer'

import Testmonial from "../../../components/Testmonial";
import ContactArea from '../../../components/ContactArea'
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

const aboutText = [
    { text: 'Siva Law Associates, a law firm established in 2009, our firm consists of well experienced attorney’s dealing with variety of cases mainly civil, criminal, Bank cases & Corporate matters on behalf of clients, companies and banks.' },
    { text: 'We also do the preparing of sale deed, other legal agreements and appearing cases for SEBI. Our motto is to provide high quality and timely service to our clients at the time, when they needed the most.' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Providing Complete End',
        subTitle: 'to End Legal Services.',
        text: 'Branch: Chennai',
        button: 'Contact us now',
        url:'/contact'
    },
    {
        images: 'slideWrapperTwo',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'Branch: Madurai',
        button: 'Contact us now',
        url:'/contact'
    },
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Alternate Dispute Resolution',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Banking & Finance',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-employee',
        title: 'Labour Law',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-thief',
        title: 'Intellectual Property',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Cyber Law',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-house',
        title: 'Environmental Law',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-house',
        title: 'Drafting , Pleading & Conveyancing',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
    {
        icon: 'flaticon-house',
        title: 'Tax',
        // content: 'It is a long established fact that a reader will be distracted by the readable content of '
    },
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]

const HomePageOne = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            {/* <Service className="serviceArea" /> */}
            <About
                className="aboutArea"
                title="About Us"
                images={about}
                pragraphs={aboutText}
            />
          <hr/>
             <Disclaimer
                className="portfolioArea"
                title=""
                subTitle=""
                portfolioItem={portfolioItem}
            />
            <ServiceArea
                className="ourServiceArea"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
           
            {/* <Testmonial
                className="testmonialArea"
            /> */}
            <ContactArea
                className="contactArea"
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea"
                slider={true}
            />
            {/* <CounterArea
                className="counterArea"
            /> */}
            {/* <BlogArea
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            /> */}
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne