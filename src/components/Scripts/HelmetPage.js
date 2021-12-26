import React from "react";
import config from "../../config.json";
import { Helmet } from "react-helmet";
const HelmetPage = ({ title, description, imageurl, imagealt, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description}></meta>
      {/* <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/tucfbclouddb.appspot.com/o/SIVALAWASSOCIATES.IN%2Fslalogoo.jpg?alt=media&token=643e95c8-3674-4964-b616-ed6ea26fcb66" /> */}

      {/* <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta name="revisit-after" content="20 days"></meta>
      <meta name="author" content={config.name}></meta>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="theme-color" content="#000000"></meta> */}

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={config.siteurl + window.location.pathname + window.location.search}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={imageurl}></meta>
      {/* <!-- Twitter --> */}
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:card" content={description}></meta>
      <meta property="twitter:url" content={config.siteurl + window.location.pathname + window.location.search}></meta>
      <meta property="twitter:description" content={description}></meta>
      <meta property="twitter:image:alt" content={imagealt}></meta>
      <meta property="twitter:image" content={imageurl}></meta>
      {/* <!-- keywords --> */}
      <meta name="keywords" content={keywords || keywords === "" ? config.keywords : keywords}></meta>
      <meta property="og:keywords" content={keywords || keywords === "" ? config.keywords : keywords}></meta>
    </Helmet>
  );
};

export default HelmetPage;
