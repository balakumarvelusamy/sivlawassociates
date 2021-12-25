import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Redirect, Router, HashRouter, Routes, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";

import AboutPage from "../Pages/AboutPage";
import PortfolioPage from "../Pages/PortfolioPage";
import TeamPage from "../Pages/TeamPage";
import SingleTeamPage from "../Pages/SingleTeamPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";
import PageNotFound from "../Pages/PageNotFoundPage";
import BlogSinglePage from "../Pages/BlogSinglePage";
import BlogFullWidth from "../Pages/BlogFullWidth";
import LogInPage from "../Pages/LogInPage";
import LaborLawPage from "../Pages/LaborLawPage";
import CyberLawPage from "../Pages/CyberLawPage";
import EnvLawPage from "../Pages/EnvLawPage";
import CivilLawPage from "../Pages/CivilLawPage";
import BankingFinancePage from "../Pages/BankingFinancePage";
import "./App.css";
import Intellectual from "../Pages/IntellectualPage";
import Drafting from "../Pages/DraftingPage";
import Tax from "../Pages/TaxPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <ToastContainer autoClose={2500} position="top-center" /> */}
          <Route exact path="/" element={<HomePageOne />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/alt-dispute-resolution" element={<PortfolioPage />}></Route>
          <Route exact path="/intellectual" element={<Intellectual />}></Route>
          <Route exact path="/attorneys-team" element={<TeamPage />} />
          <Route exact path="/attorneys" element={<SingleTeamPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/allblog" element={<BlogPage />} />
          <Route exact path="/blog-single/:id" element={<BlogSinglePage />} />
          <Route exact path="/blog-fullwidth" element={<BlogFullWidth />} />
          <Route exact path="/login" element={<LogInPage />} />
          <Route exact path="/labourlaw" element={<LaborLawPage />} />
          <Route exact path="/cyber-law" element={<CyberLawPage />} />
          <Route exact path="/env-law" element={<EnvLawPage />} />
          <Route exact path="/civil" element={<CivilLawPage />} />
          <Route exact path="/banking-finance" element={<BankingFinancePage />} />
          <Route exact path="/drafting" element={<Drafting />} />
          <Route exact path="/tax" element={<Tax />} />
          <Route exact path="/pagenotfound" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
