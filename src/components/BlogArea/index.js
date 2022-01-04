import React, { useEffect, useState } from "react";
import SectionTitle from "../Title";
import { Link } from "react-router-dom";
import "./style.scss";
import config from "../../config.json";
// images
import blog1 from "../../images/blog/1.jpg";
import blog2 from "../../images/blog/2.jpg";
import blog3 from "../../images/blog/3.jpg";
import avatar from "../../images/logo/slalogo.png";

const BlogArea = ({ className, title, source, subTitle }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const postsPerPage = source === "home" ? 6 : 20;
  let arrayForHoldingPosts = [];
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(postsPerPage);
  const [end, setEnd] = useState(0);
  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
    setEnd(end);
  };
  const getPostDetails = async () => {
    setLoading((loading) => !loading);
    await fetch(config.service_url + "getposts")
      .then((response) => response.json())
      .then((data) => {
        let active = data
          .filter((filter) => filter.isactive === 1 && filter.published === 1 && filter.posttypevalue === "Blog")
          .map((data) => {
            return data;
          });
        setPosts(active);
        const slicedPosts = active.slice(0, postsPerPage);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
        setEnd(end);

        setLoading((loading) => !loading);
        console.log(data, "getposts");
      })
      .catch((err) => {
        setNetworkError("Something went wrong, Please try again later!!");
        // console.log(networkError);
      });
  };
  const handleShowMorePosts = () => {
    loopWithSlice(0, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  useEffect(() => {
    getPostDetails();
    //loopWithSlice(0, postsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          {!loading ? (
            postsToShow.length > 0 ? (
              postsToShow.map((blog, index) => (
                <div key={index} className="col-lg-4 col-sm-6 col-12">
                  <div className="blogWrap">
                    <div className="blogImage">
                      <img src={blog.post_image} className="thumbnailimage" alt="" />
                    </div>
                    <div className="blogContent">
                      <h1>
                        <Link to={"/blog-single/" + blog.slug}>{blog.posttitle}</Link>
                      </h1>

                      <ul className="blogMeta font-size-small">
                        <li>{blog.createdby}</li>
                        <li>{blog.postcategory}</li>
                        <li>{blog.displaydate}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-2 border rounded mb-2"> No Post available. Please check after sometime.</div>
            )
          ) : (
            <div className="p-2 border round"> Please wait while we are loading post</div>
          )}
        </div>
        <div className={source === "home" ? "d-none" : ""}> {end <= posts.length + postsPerPage && <button onClick={handleShowMorePosts}>Load more Posts</button>}</div>
      </div>
    </div>
  );
};
export default BlogArea;
