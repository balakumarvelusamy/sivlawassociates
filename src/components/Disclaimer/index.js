import React from "react";
import SectionTitle from "../Title";
import "./style.scss";

// images
import portfolio1 from "../../images/studies/1.jpg";
import portfolio2 from "../../images/studies/2.jpg";
import portfolio3 from "../../images/studies/3.jpg";
import portfolio4 from "../../images/studies/4.jpg";
import portfolio5 from "../../images/studies/5.jpg";
import DisclaimerContent from "../Disclaimer/DisclaimerContent";

const portfolioItem = [
  { images: portfolio1, title: "General Service", subtitle: "Corporate" },
  { images: portfolio2, title: "Personal Issue", subtitle: "General" },
  { images: portfolio3, title: "Business Accounting", subtitle: "Business" },
  { images: portfolio4, title: "Accounting issue", subtitle: "Criminal" },
  {
    images: portfolio5,
    title: "Business Accounting",
    subtitle: "Family Issue",
  },
];
const Disclaimer = ({
  title,
  subTitle,
  className,
  fullWidth,
  portfolioItem,
}) => {
  return (
    <>
      <DisclaimerContent className="disclaimercontent"></DisclaimerContent>
    </>
  );
};
export default Disclaimer;
