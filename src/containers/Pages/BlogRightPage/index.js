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
import BlogPost from "../../../components/BlogPost";
import Tags from "../../../components/Tags";
import Instagram from "../../../components/Instagram";
// images
import breadcumb from "../../../images/breadcumb/1.jpg";
import "./style.scss";

const BlogRightPage = (props) => {
  const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Blog Title" }];

  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="Blog Title" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="blogPostArea blogPostLeftArea">
        <div className="container ">
          <div className="row mt-5 mb-5">
            <div className="col-lg-8">
              <BlogPost slug="title-title" />
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
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default BlogRightPage;
