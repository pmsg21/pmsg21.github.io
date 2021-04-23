import React from 'react';
import PropTypes from 'prop-types';
import {
    faJsSquare,
    faPhp,
    faGitAlt,
    faHtml5,
    faCss3Alt,
    faLess,
    faSass,
    faBootstrap,
    faLinux,
    faUbuntu,
    faJenkins,
    faReact,
    faAngular,
    faSymfony,
    faLaravel
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import animateLettersHelper from "../helpers/animateLettersHelper";
import { skillsComponent } from '../data/sectionsContentTranslation';

const SkillsComponent = ({ currentLanguage }) => {

    const {
        title,
        paragraph,
        developmentSubtitle,
        languagesSubtitle,
        spanish,
        english
    } = skillsComponent;

    return (
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    {
                        animateLettersHelper('skills', title[currentLanguage], 'h2')
                    }
                    <p>{ paragraph[currentLanguage] }</p>
                </div>

                <div className="skills-content row">
                    <div className="col-lg-6 development-container">
                        {
                            animateLettersHelper('development', developmentSubtitle[currentLanguage], 'h4')
                        }
                        <div className="row mt-lg-2 mt-4 mt-sm-4">
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="HTML5" icon={faHtml5} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="CSS3" icon={faCss3Alt} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="LESS" icon={faLess} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="SASS" icon={faSass} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Bootstrap 3 & 4" icon={faBootstrap} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="JavaScript & jQuery" icon={faJsSquare} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="React.js & React Native" icon={faReact} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Angular" icon={faAngular} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Php" icon={faPhp} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Symfony 3 & 4" icon={faSymfony} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Laravel" icon={faLaravel} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Linux" icon={faLinux} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Ubuntu Server 16.04 & Desktop 19.10" icon={faUbuntu} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Git" icon={faGitAlt} />
                            </div>
                            <div className="col-lg-2 col-4 mb-3 text-center">
                                <FontAwesomeIcon data-tip="Jenkins" icon={faJenkins} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-4 mt-sm-4">
                        <div className="row">
                            <div className="col-lg-12 col-6">
                                {
                                    animateLettersHelper('workflow', 'Workflow', 'h4')
                                }
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mb-0 text-left"><FontAwesomeIcon icon={faCheck} /><span className="ml-3">Mobile-First, Responsive Design</span></p>
                                    </li>
                                    <li>
                                        <p className="mb-0 text-left"><FontAwesomeIcon icon={faCheck} /><span className="ml-3">Cross Browser Testing & Debugging</span></p>
                                    </li>
                                    <li>
                                        <p className="mb-0 text-left"><FontAwesomeIcon icon={faCheck} /><span className="ml-3">Agile Development & Scrum</span></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-12 col-6">
                                {
                                    animateLettersHelper('languages', languagesSubtitle[currentLanguage], 'h4')
                                }
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="mb-0"><FontAwesomeIcon icon={faCheck} /><span className="ml-3">{ spanish[currentLanguage] }</span></p>
                                    </li>
                                    <li>
                                        <p className="mb-0"><FontAwesomeIcon icon={faCheck} /><span className="ml-3">{ english[currentLanguage] }</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

SkillsComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default SkillsComponent;
