import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import config from "../../config.json";
import post1 from "../../images/case-studies-details/1.jpg";
import post2 from "../../images/case-studies-details/2.jpg";
import post3 from "../../images/case-studies-details/3.jpg";

const RecentPosts = ({ className, type, source }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState("");
  const postsPerPage = source === "home" ? 6 : 20;
  let arrayForHoldingPosts = [];
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(postsPerPage);
  const [end, setEnd] = useState(0);
  const [flag, setflag] = useState(false);

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
          .filter((filter) => filter.isactive === 1 && filter.published === 1 && filter.posttypevalue === type)
          .map((data) => {
            return data;
          });
        setPosts(active);
        const slicedPosts = active.slice(0, postsPerPage);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
        setEnd(end);

        setLoading((loading) => !loading);
        console.log(data, "getrecentposts");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <h3>Recent Post</h3>
      <ul className="blogPostMeta">
        {postsToShow.length > 0 &&
          postsToShow.map((post, i) => (
            <>
              <li>
                {/* <Link to={{ pathname: "/blog-single/" + post.slug, query: { reload: true, slug:post.slug }} }> */}
                {/* <Link to={"/blog-single/" + post.slug} reload={flag} slug={post.slug} onClick={(e) => setflag((flag) => !flag)}>
                  {" "}
                  <img src={post.post_image} alt="Gro Lancer Academy" />
                  {post.posttitle}
                </Link> */}
                <a href="" onClick={() => navigate("/blog-single/" + post.slug, { state: { slug: post.slug } })}>
                  <img src={post.post_image} alt="Gro Lancer Academy" />
                  {post.posttitle}
                </a>
              </li>
            </>
          ))}
      </ul>
      <div className={source === "home" ? "d-none" : "blogPostMeta"}>
        {end <= posts.length + postsPerPage && (
          <a href="#" onClick={handleShowMorePosts}>
            Load more
          </a>
        )}
      </div>
    </div>
  );
};
export default RecentPosts;
