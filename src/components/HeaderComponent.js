import React from 'react';
import PropTypes from 'prop-types';
import { headerComponent } from '../data/sectionsContentTranslation';

const HeaderComponent = ({ currentLanguage, handleLanguageChange }) => {

    const { home, about, skills, resume, portfolio, contact, language } = headerComponent;

    return (
        <header id="header" className="d-flex flex-column justify-content-center">

            <nav className="nav-menu">
                <ul>
                    <li className="active"><a href="#home"><i className="bx bx-home"></i> <span>{ home[currentLanguage] }</span></a></li>
                    <li><a href="#about" aria-label="go-to-about"><i className="bx bx-user"></i> <span>{ about[currentLanguage] }</span></a></li>
                    <li><a href="#skills" aria-label="go-to-skills"><i className="bx bxs-user-detail"></i> <span>{ skills[currentLanguage] }</span></a></li>
                    <li><a href="#resume" aria-label="go-to-resume"><i className="bx bx-file-blank"></i> <span>{ resume[currentLanguage] }</span></a></li>
                    <li><a href="#portfolio" aria-label="go-to-portfolio"><i className="bx bx-book-content"></i> <span>{ portfolio[currentLanguage] }</span></a></li>
                    <li><a href="#contact" aria-label="go-to-contact"><i className="bx bx-envelope"></i> <span>{ contact[currentLanguage] }</span></a></li>
                    <li><a href="#language" aria-label="change-language" onClick={handleLanguageChange}><i className="bx bx-captions"></i> <span>{ language[currentLanguage] }</span></a></li>
                </ul>
            </nav>

        </header>
    );
};

HeaderComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    handleLanguageChange: PropTypes.func.isRequired,
};

export default HeaderComponent;
