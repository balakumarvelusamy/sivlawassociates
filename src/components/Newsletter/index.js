import React, { useState } from "react";
import "./style.scss";
//import { fetchService } from "../Services/Globalfunction";
import config from "../../config.json";
const NewsLetter = ({ className }) => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("email =", email);
    let _data = {};
    _data.email = email;
    _data.createddate = new Date();
    console.log("newsletter", _data);
    fetch(config.service_url + "newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: _data }) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          event.target.reset();
          setMsg("Thank you. You are Sucessfully subscribed to our newsletter.");
        } else {
          setMsg(data.message);
        }
      })
      .catch((error) => {});
  };
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletterWrap">
              <h3>Subscribe Newsletter for latest Legal updates</h3>
              <form onSubmit={submitHandler} className="newsletterForm">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Please enter your email Address" />
                <button type="submit">subscribe</button>
              </form>
              <p className="text-white">{msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
