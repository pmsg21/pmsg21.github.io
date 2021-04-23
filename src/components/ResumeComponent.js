import React from 'react';
import PropTypes from 'prop-types';
import animateLettersHelper from "../helpers/animateLettersHelper";
import CoursesAndCertificationsItemComponent from "./CoursesAndCertificationsItemComponent";
import ResumeItemComponent from "./ResumeItemComponent";
import { resumeComponent } from '../data/sectionsContentTranslation';

const ResumeComponent = ({ currentLanguage }) => {

    const {
        title,
        paragraph,
        educationSubtitle,
        education,
        coursesAndCertificationsTitle,
        coursesAndCertifications,
        professionalExperienceSubtitle,
        professionalExperience,
        cv: {
            text,
            link: {
                here,
                url
            }
        }
    } = resumeComponent;

    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    {
                        animateLettersHelper('resume', title[currentLanguage], 'h2')
                    }
                    <p>{ paragraph[currentLanguage] }</p>
                    <p className="mt-3">{ text[currentLanguage] }<a href={ url[currentLanguage] } target="_blank" rel="noreferrer">{ here[currentLanguage] }</a></p>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        {
                            animateLettersHelper('education', educationSubtitle[currentLanguage], 'h3')
                        }
                        <div className="resume-item mt-2">
                            <h4>{ education[currentLanguage] }</h4>
                            <h5>2011 - 2017</h5>
                            <p><em>Universidad Bicentenaria de Aragua, Venezuela</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>{ coursesAndCertificationsTitle[currentLanguage] }</h4>
                            <ul>
                                {
                                    coursesAndCertifications.map(({id, name, institute, link}) =>
                                        <CoursesAndCertificationsItemComponent
                                            key={id}
                                            courseName={name[currentLanguage]}
                                            institute={institute}
                                            link={link}
                                        />
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {
                            animateLettersHelper('experience', professionalExperienceSubtitle[currentLanguage], 'h3')
                        }
                        {
                            professionalExperience.map(({id, position, company, yearFrom, yearTo, description}, index) =>
                                <ResumeItemComponent
                                    index={index}
                                    key={id}
                                    position={position[currentLanguage]}
                                    company={company}
                                    yearFrom={yearFrom}
                                    yearTo={yearTo?.[currentLanguage] ? yearTo?.[currentLanguage] : yearTo}
                                    description={description[currentLanguage]}
                                />
                            )
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

ResumeComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default ResumeComponent;
