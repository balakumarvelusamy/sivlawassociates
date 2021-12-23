import React, { Fragment, Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
      <Fragment>
        <BrowserRouter>
          <ToastContainer autoClose={2500} position="top-center" />
          <Switch>
            <Route exact path="/" component={HomePageOne} />
            <Route exact path="/about" component={AboutPage} />
            {/* <Route exact path="/practice" component={PracticePage} /> */}
            {/* <Route exact path="/practice-details" component={PracticeSinglePage} /> */}
            <Route exact path="/alt-dispute-resolution" component={PortfolioPage} />
            <Route exact path="/intellectual" component={Intellectual} />
            <Route exact path="/attorneys-team" component={TeamPage} />
            <Route exact path="/attorneys" component={SingleTeamPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/allblog" component={BlogPage} />
            <Route exact path="/blog-single/:id" component={BlogSinglePage} />
            <Route exact path="/blog-fullwidth" component={BlogFullWidth} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/labourlaw" component={LaborLawPage} />
            <Route exact path="/cyber-law" component={CyberLawPage} />
            <Route exact path="/env-law" component={EnvLawPage} />
            <Route exact path="/civil" component={CivilLawPage} />
            <Route exact path="/banking-finance" component={BankingFinancePage} />
            <Route exact path="/drafting" component={Drafting} />
            <Route exact path="/tax" component={Tax} />
            <Route path="/pagenotfound" component={PageNotFound} />
            {/* <Redirect to="/pagenotfound" /> */}
            {/* <Route path="*" component={PageNotFound} /> */}
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
