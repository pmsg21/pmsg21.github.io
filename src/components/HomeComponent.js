import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import animateLettersHelper from "../helpers/animateLettersHelper";
import { homeComponent, links } from "../data/sectionsContentTranslation";

const HomeComponent = ({ currentLanguage }) => {

    const { im, typedValues } = homeComponent;
    const { linkedIn } = links;

    return (
        <section id="home" className="d-flex flex-column justify-content-center">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                {
                    animateLettersHelper('title', 'Pablo Sierra', 'h1', true)
                }
                <p>{ im[currentLanguage] } <Typed
                    strings={ typedValues[currentLanguage] }
                    typeSpeed={80}
                    backSpeed={80}
                    loop >
                </Typed></p>
                <div className="social-links">
                    <a href={linkedIn[currentLanguage]} target="_blank" rel="noreferrer"  aria-label="go-to-linkedin" className="linkedin" data-tip="LinkedIn"><i className="bx bxl-linkedin animate" id="linkedin_link_top"></i></a>
                    <a href="https://github.com/pmsg21" target="_blank" rel="noreferrer"  aria-label="go-to-github" className="github" data-tip="Github"><i className="bx bxl-github animate" id="github_link_top"></i></a>
                    <a href="https://join.skype.com/invite/A4Ju5fDKyFcp" target="_blank" rel="noreferrer"  aria-label="go-to-skype" className="skype" data-tip="Skype"><i className="bx bxl-skype animate" id="skype_link_top"></i></a>
                </div>
            </div>
        </section>
    );
};

HomeComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default HomeComponent;
