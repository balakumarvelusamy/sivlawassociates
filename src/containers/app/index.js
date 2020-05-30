import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePageOne from '../Pages/HomePageOne'
import HomePageTwo from '../Pages/HomePageTwo'
import HomePageThree from '../Pages/HomePageThree'
import AboutPage from '../Pages/AboutPage'
import PracticePage from '../Pages/PracticePage'
import PracticeSinglePage from '../Pages/PracticeSinglePage'
import PortfolioPage from '../Pages/PortfolioPage'
import SinglePortfolioPage from '../Pages/SinglePortfolioPage'
import TeamPage from '../Pages/TeamPage'
import SingleTeamPage from '../Pages/SingleTeamPage'
import ContactPage from '../Pages/ContactPage'
import BlogLeftPage from '../Pages/BlogLeftPage'
import BlogRightPage from '../Pages/BlogRightPage'
import BlogFullWidth from '../Pages/BlogFullWidth'
import LogInPage from '../Pages/LogInPage'
import LaborLawPage from '../Pages/LaborLawPage'
import CyberLawPage from '../Pages/CyberLawPage'
import EnvLawPage from '../Pages/EnvLawPage'
import CivilLawPage from '../Pages/CivilLawPage'
import BankingFinancePage from '../Pages/BankingFinancePage'
import './App.css';
import Intellectual from '../Pages/IntellectualPage';
import Drafting from '../Pages/DraftingPage';
import Tax from '../Pages/TaxPage';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePageOne} />
                        <Route exact path="/home-two" component={HomePageTwo} />
                        <Route exact path="/home-three" component={HomePageThree} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/practice" component={PracticePage} />
                        <Route exact path="/practice-details" component={PracticeSinglePage} />
                     
                        <Route exact path="/alt-dispute-resolution" component={PortfolioPage} />
                        <Route exact path="/intellectual" component={Intellectual} />
                        <Route exact path="/attorneys" component={TeamPage} />
                        <Route exact path="/attorneys-single" component={SingleTeamPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Route exact path="/blog-left" component={BlogLeftPage} />
                        <Route exact path="/blog-right" component={BlogRightPage} />
                        <Route exact path="/blog-fullwidth" component={BlogFullWidth} />
                        <Route exact path="/login" component={LogInPage} />
                        <Route exact path="/labourlaw" component={LaborLawPage} />
                        <Route exact path="/cyber-law" component={CyberLawPage} />
                        <Route exact path="/env-law" component={EnvLawPage} />
                        <Route exact path="/civil" component={CivilLawPage} />
                        <Route exact path="/banking-finance" component={BankingFinancePage} />
                        <Route exact path="/drafting" component={Drafting} />
                        <Route exact path="/tax" component={Tax} />
                       \
                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
