import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import SkillsComponent from "./components/SkillsComponent";
import ResumeComponent from "./components/ResumeComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import jqueryHelper from "./helpers/jqueryHelper";
import './animate.min.css';

const App = () => {

    const [siteLanguage, setSiteLanguage] = useState({
        currentLanguage: 'es'
    });

    const { currentLanguage } = siteLanguage;

    const handleLanguageChange = () => {
        setSiteLanguage({
            currentLanguage: currentLanguage === 'en' ? 'es' : 'en'
        });
    };

    useEffect(() => {
        jqueryHelper();
    }, [currentLanguage]);


    return (
        <>

            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            <HeaderComponent currentLanguage={currentLanguage} handleLanguageChange={handleLanguageChange} />

            <HomeComponent currentLanguage={currentLanguage} />

            <main id="main">

                <AboutComponent currentLanguage={currentLanguage} />

                <SkillsComponent currentLanguage={currentLanguage} />

                <ResumeComponent currentLanguage={currentLanguage} />

                <PortfolioComponent currentLanguage={currentLanguage} />

                <ContactComponent currentLanguage={currentLanguage} />

            </main>

            <FooterComponent currentLanguage={currentLanguage} />

            <a href="#home" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></a>
            <div id="preloader"></div>

            <ReactTooltip />
        </>
    );
};

export default App;
