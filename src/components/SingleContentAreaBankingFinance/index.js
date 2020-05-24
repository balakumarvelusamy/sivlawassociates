import React from "react";
import avatarImg from "../../images/practice/4.jpg";
import BankingFinanceContent from "../ServiceArea/BankingFinanceContent";

import "./style.scss";

const listItem = [
  "The master-builder of human happiness.",
  "Occasionally circumstances occur in which toil and pain",
  "Avoids pleasure itself, because it is pleasure",
  "who do not know how to pursue pleasure",
  "To take a trivial example, which of us ever undertakes",
];
const SingleContentArea = ({ className, avatar, image }) => {
  return (
    <div className={className}>
      <div className="singleContentWrap">
        <BankingFinanceContent></BankingFinanceContent>
    <br/>
      </div>
    </div>
  );
};
export default SingleContentArea;
