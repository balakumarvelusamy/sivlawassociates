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

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "News" }];
const geturl = window.location.href.split("/");
const getvalue = geturl[window.location.href.split("/").length - 1];

const BlogFullWidth = (props) => {
  const { slug } = props.match.params;
  let id = slug === undefined ? getvalue : slug;
  console.log("id", id);
  return (
    <Fragment>
      <header className="headerArea">
        {/* <HeaderTop className="headerTop" /> */}
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb className="breadcumbArea" title="News" breadcumbMenu={breadcumbMenu} background={breadcumb} />
      <div className="blogPostArea blogFullWidth">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BlogPost id={id} />
            </div>
          </div>
        </div>
      </div>
      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default BlogFullWidth;
