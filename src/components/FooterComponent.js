import React from 'react';
import PropTypes from 'prop-types';
import animateLettersHelper from "../helpers/animateLettersHelper";
import { links, footerComponent } from "../data/sectionsContentTranslation";

const FooterComponent = ({ currentLanguage }) => {

    const { linkedIn } = links;
    const { quote } = footerComponent;

    return (
        <footer id="footer">
            <div className="container">
                {
                    animateLettersHelper('footer', 'Pablo Sierra', 'h3')
                }
                <p>{ quote[currentLanguage] }</p>
                <div className="social-links">
                    <a href={linkedIn[currentLanguage]} target="_blank" rel="noreferrer"  aria-label="go-to-linkedin" className="linkedin animate bottom-icon" id="linkedin_link_bottom" data-tip="LinkedIn"><i className="bx bxl-linkedin"></i></a>
                    <a href="https://github.com/pmsg21" target="_blank" rel="noreferrer"  aria-label="go-to-github" className="github animate bottom-icon" id="github_link_bottom" data-tip="Github"><i className="bx bxl-github"></i></a>
                    <a href="https://join.skype.com/invite/A4Ju5fDKyFcp" target="_blank" rel="noreferrer"  aria-label="go-to-skype" className="skype animate bottom-icon" id="skype_link_bottom" data-tip="Skype"><i className="bx bxl-skype"></i></a>
                </div>
            </div>
        </footer>
    );
};

FooterComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default FooterComponent;
