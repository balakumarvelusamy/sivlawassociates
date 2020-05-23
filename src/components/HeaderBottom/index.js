import React, { useState, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo/slalogo.png";
import "./style.scss";

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <NavLink to="/">
                  { <img className="m-1" src={logo} alt=""></img> }

                </NavLink>
              </div>
            </div>
            <div
              className={
                responsive
                  ? "col-lg-8 responsiveWrapper active"
                  : "col-lg-8 responsiveWrapper"
              }
            >
              <ul className="mainMenuWrap">
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                  {/* <ul className="subMenu">
                    <li>
                      <NavLink exact to="/">
                        Home One
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/home-two">
                        Home Two
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/home-three">
                        Home Three
                      </NavLink>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/">
                    Attorneys
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/attorneys-single">
                      S.CHANDRASEKARAN
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/attorneys-single">
                      C.SIVAKUMAR
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/attorneys-single">
                      REKHA SIVAKUMAR
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink exact to="/">
                  Area of Practice
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/case-stadies">
                      Alternate Dispute Resolution
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/practice">
                      Banking & Finance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/case-stadies-details">
                      Labour Law
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/case-stadies-details">
                      Intellectual Property & Cyber Law
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/case-stadies-details">
                      Drafting , Pleading & Conveyancing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/case-stadies-details">
                      Tax
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <NavLink exact to="/blog-left">
                    News
                  </NavLink>
                  <ul className="subMenu">
                    <li>
                      <NavLink exact to="/blog-left">
                        Blog left sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/blog-right">
                        Blog Right sidebar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/blog-fullwidth">
                        Blog FullWidth
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
               
                <li>
                  <NavLink exact to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/login">
                    LogIn
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
              <div className="searchMenuWrapper">
                <div className="searchWrap">
                  <i onClick={clickHandler} className="fa 3x fa-phone"></i>
                  <div className={trigger ? "searchform active" : "searchform"}>
                    +91-9965449000<hr/>
                    +91-9965446000 <hr />
                    044-43536263<hr />
                    <a href="mailto:sivalawassociates@gmail.com">
                      <i class="fa fa-envelope text-dark px-2"></i>
                      sivalawassociates@gmail.com
                    </a>
                    {/* <form onSubmit={submitHandler}>
                                            <input
                                                placeholder="search here"
                                                value={search}
                                                type="text"
                                                onChange={event => setSearch(event.target.value)}
                                            /> 
                                            <button><i className="fa fa-search"></i></button>
                                        </form> */}
                  </div>
                </div>
                <div onClick={responsiveHandler} className="responsiveTrigger">
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
