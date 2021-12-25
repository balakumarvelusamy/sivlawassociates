import React from "react";
import config from "../../config.json";
import { Helmet } from "react-helmet";
const HelmetPage = ({ title, description, imageurl, imagealt, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/tucfbclouddb.appspot.com/o/SIVALAWASSOCIATES.IN%2Fslalogoo.jpg?alt=media&token=643e95c8-3674-4964-b616-ed6ea26fcb66" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={config.siteurl + window.location.pathname + window.location.search} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageurl} />

      {/* <!-- Twitter --> */}
      <meta name="title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:card" content={description} />
      <meta property="twitter:url" content={config.siteurl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageurl} />
      {/* <!-- keywords --> */}
      <meta name="keywords" content={keywords || keywords === "" ? config.keywords : keywords} />
      <meta property="og:keywords" content={keywords || keywords === "" ? config.keywords : keywords} />
    </Helmet>
  );
};

export default HelmetPage;
