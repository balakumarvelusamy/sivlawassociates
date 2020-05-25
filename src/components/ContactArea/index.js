import React from "react";
import Form from "../Form";
import "./style.scss";
import ContactContent from '../ContactArea/ContactContent'
const ContactArea = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <ContactContent></ContactContent>
          </div>
          <div className="col-12 col-lg-7">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
