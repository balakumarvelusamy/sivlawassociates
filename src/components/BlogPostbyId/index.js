import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import config from "../../config.json";
import MetaTags from "../Scripts/HelmetPage";

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
          let _filterData = data.data;
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
            <>
              <MetaTags title={blog.posttitle} description={"Description - " + blog.posttitle} imageurl={blog.post_image} imagealt={blog.posttitle} keywords={""} />
              <div key={index} className="blogPostWrapper">
                <div className="blogPostImg">
                  <img src={blog.post_image} className="titleimage" alt={config.name} />
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
                  <h1>{blog.posttitle}</h1>
                  <div dangerouslySetInnerHTML={{ __html: blog.postcontent }} />
                </div>
              </div>
            </>
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
              <Link to="/allblog" className="btn p-2 mx-2">
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
