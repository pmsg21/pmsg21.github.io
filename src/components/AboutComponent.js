import React from 'react';
import PropTypes from 'prop-types';
import animateLettersHelper from "../helpers/animateLettersHelper";
import { aboutComponent } from '../data/sectionsContentTranslation';

const AboutComponent = ({ currentLanguage }) => {

    const {
        title,
        firstParagraph,
        position,
        quote,
        birthday: { text: birthdayText, value: birthdayValue},
        country: { text: countryText, value: countryValue},
        age: { text: ageText, value: ageValue},
        degree: { text: degreeText, value: degreeValue},
        secondParagraph
    } = aboutComponent;

    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    {
                        animateLettersHelper('about', title[currentLanguage], 'h2')
                    }
                    <p>{ firstParagraph[currentLanguage] }</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="/assets/img/profile-img.jpg" className="img-fluid w-75 d-block m-auto" alt="profile-img" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        {
                            animateLettersHelper('position', position[currentLanguage], 'h3')
                        }
                        <p className="font-italic">{ quote[currentLanguage] }</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i><b>{ birthdayText[currentLanguage] }:</b> { birthdayValue[currentLanguage] } </li>
                                    <li><i className="icofont-rounded-right"></i><b>{ countryText[currentLanguage] }:</b> { countryValue } </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i><b>{ ageText[currentLanguage] }:</b> { ageValue } </li>
                                    <li><i className="icofont-rounded-right"></i><b>{ degreeText[currentLanguage] }:</b> { degreeValue[currentLanguage] } </li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-justify">{ secondParagraph[currentLanguage] }</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

AboutComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default AboutComponent;
