import React from "react";
import "./style.scss";
const HeaderTop = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>309 1st
                  Floor, Linghi Chetty St., Parrys, Chennai-01
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                  <a
                    className="text-white"
                    href="mailto:sivalawassociates@gmail.com"
                  >
                    <i class="fa fa-envelope px-2 white"></i>
                    e-Mail us
                  </a>
                </li>
                <li>
                  <i className="fa fa-phone"></i>+91-9965449000
                </li>
                <li>
                  <i className="fa fa-clock-o"></i>9AM-PM
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle2 text-right">
                <a
                  href="https://api.whatsapp.com/send?phone=919965449000&forceIntent=true&load=loadInIOSExternalSafari"
                  target="blank"
                >
                  {" "}
                  <i className="fa fa-whatsapp text-success lighten-2"></i>{" "}
                  Whats App
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
