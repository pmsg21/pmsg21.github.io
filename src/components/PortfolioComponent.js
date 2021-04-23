import React from 'react';
import PropTypes from 'prop-types';
import animateLettersHelper from "../helpers/animateLettersHelper";
import { portfolioComponent } from '../data/sectionsContentTranslation';
import PortfolioItemComponent from "./PortfolioItemComponent";

const PortfolioComponent = ({ currentLanguage }) => {

    const { title, paragraph, portfolioItems, iconViewText, iconLinkText } = portfolioComponent;

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    {
                        animateLettersHelper('portfolio', title[currentLanguage], 'h2')
                    }
                    <p>{ paragraph[currentLanguage] }</p>
                </div>

                <div className="row mt-30">
                    {
                        portfolioItems.map(({ id, title, imgName, projectUrlText, projectUrl, projectCodeUrlText, projectCodeUrl, projectDescriptionText, projectDescription }) =>
                            <PortfolioItemComponent
                                key={id}
                                title={title[currentLanguage]}
                                imgName={imgName}
                                projectUrlText={projectUrlText[currentLanguage]}
                                projectUrl={projectUrl}
                                projectCodeUrlText={projectCodeUrlText[currentLanguage]}
                                projectCodeUrl={projectCodeUrl}
                                projectDescriptionText={projectDescriptionText[currentLanguage]}
                                projectDescription={projectDescription[currentLanguage]}
                                iconViewText={iconViewText[currentLanguage]}
                                iconLinkText={iconLinkText[currentLanguage]}
                            />
                        )
                    }
                </div>

            </div>
        </section>
    );
};

PortfolioComponent.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

export default PortfolioComponent;
