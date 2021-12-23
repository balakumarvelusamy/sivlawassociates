import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import SearchSidebar from "../../../components/SearchSidebar";
import CetagorySidebar from "../../../components/CetagorySidebar";
import RecentPosts from "../../../components/RecentPosts";
import BlogPostbyId from "../../../components/BlogPostbyId";
import Tags from "../../../components/Tags";
import Instagram from "../../../components/Instagram";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import "./style.scss";

const geturl = window.location.href.split("/");
const getvalue = geturl[window.location.href.split("/").length - 1];
const BlogSinglePage = (props) => {
  const { slug } = props.match.params;
  let id = slug === undefined ? getvalue : slug;

  const breadcumbMenu = [{ name: "Home", route: "/" }, { name: id }];

  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title={id} breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="blogPostArea blogPostLeftArea">
        <div className="container ">
          <div className="row mt-5 mb-5">
            <div className="col-lg-8">
              <BlogPostbyId id={id} />
            </div>
            <div className="col-lg-4">
              <aside>
                <CetagorySidebar title="Category" className="cetagoryWrap" />
                <RecentPosts className="recentPostWrapper" />
                {/* <Instagram /> */}
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg id="wave" viewBox="0 0 1438 98" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="#272c3f" d="M0,60L120,65C240,70,480,80,720,71.7C960,63,1200,37,1440,35C1680,33,1920,57,2160,63.3C2400,70,2640,60,2880,51.7C3120,43,3360,37,3600,41.7C3840,47,4080,63,4320,66.7C4560,70,4800,60,5040,50C5280,40,5520,30,5760,28.3C6000,27,6240,33,6480,41.7C6720,50,6960,60,7200,55C7440,50,7680,30,7920,26.7C8160,23,8400,37,8640,48.3C8880,60,9120,70,9360,68.3C9600,67,9840,53,10080,45C10320,37,10560,33,10800,40C11040,47,11280,63,11520,66.7C11760,70,12000,60,12240,46.7C12480,33,12720,17,12960,11.7C13200,7,13440,13,13680,15C13920,17,14160,13,14400,18.3C14640,23,14880,37,15120,46.7C15360,57,15600,63,15840,66.7C16080,70,16320,70,16560,60C16800,50,17040,30,17160,20L17280,10L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"></path>
        </svg>
      </div>
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default BlogSinglePage;
