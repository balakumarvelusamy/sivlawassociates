import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import config from "../../config.json";
import blog1 from "../../images/blog-page/1.jpg";
import blog2 from "../../images/blog-page/2.jpg";
import blog3 from "../../images/blog-page/3.jpg";
import blog4 from "../../images/blog-page/4.jpg";
import blog5 from "../../images/blog-page/5.jpg";
import avatar from "../../images/blog-page/6.jpg";

const BlogPostbyId = (props) => {
  const [blogpost, setBlogpost] = useState([]);
  const [comments, setComments] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [image, setImage] = useState("");
  const [smShow, setSmShow] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("id111", props.id);
  const getpostbytitle = async (id) => {
    setLoading((loading) => !loading);
    console.log("id", id);
    await fetch(config.service_url + `getpost/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log("id", data.data);
          let _filterData = data.data.filter((blog) => blog.posttypevalue === "Blog");
          if (_filterData) {
            setBlogpost(_filterData);
            //getcomments(_filterData[0].post_id);
            setImage(_filterData[0].post_image);
            console.log("post image", image);
            setLoading((loading) => !loading);
          }
        } else {
          setLoading((loading) => !loading);
          setSuccessMsg("No Posts");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getcomments = async (post_id) => {
    await fetch(config.service_url + `getcomments/${post_id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setComments(data.data);
          console.log(data, "comments");
        } else {
          console.log(data.message);
        }
      });
  };
  useEffect(() => {
    getpostbytitle(props.id);
  }, []);
  // call service
  return (
    <Fragment>
      {!loading ? (
        blogpost.length !== 0 ? (
          blogpost.map((blog, index) => (
            <div key={index} className="blogPostWrapper">
              <div className="blogPostImg">
                <img src={blog.post_image} className="titleimage" alt="" />
              </div>

              <div className="blogPostContent">
                <ul className="blogPostMeta">
                  <Fragment>
                    <li>
                      <img src={blog.post_image} alt="" />
                    </li>
                    <li>{blog.createdby}</li>
                    <li>{blog.postcategory}</li>
                    <li>{blog.displaydate}</li>
                  </Fragment>
                </ul>
                <h3>{blog.posttitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: blog.postcontent }} />
              </div>
            </div>
          ))
        ) : (
          <div>
            <div className="row">
              <div className="icon-bx-wraper text-white service-box2">
                <div className="icon-content">
                  <h5 className="dlab-tilte text-dark">No Post Found</h5>
                </div>
                <br />
              </div>
            </div>
            <div className="row mb-5">
              <Link to="/allblog" className=" p-2">
                All Posts
              </Link>
            </div>
          </div>
        )
      ) : (
        <div className="p-2 border round"> Please wait while we are loading post</div>
      )}
    </Fragment>
  );
};
export default BlogPostbyId;
