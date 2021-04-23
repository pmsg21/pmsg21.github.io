import React from 'react';
import PropTypes from 'prop-types';
import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showPortfolioModal } from "../helpers/sweetAlertHelper";

const PortfolioItemComponent = ({ title, imgName, projectUrlText, projectUrl, projectCodeUrlText, projectCodeUrl, projectDescriptionText, projectDescription, iconViewText,  iconLinkText }) => {
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="d-lg-none">
                <img
                    src={`./assets/img/portfolio/${imgName}.png`}
                    alt={imgName}
                    className="img-fluid clickable"
                    onClick={() => {
                        showPortfolioModal(title, imgName, projectUrlText, projectUrl, projectCodeUrlText, projectCodeUrl, projectDescriptionText, projectDescription);
                    }}
                />
            </div>
            <div className="portfolio-item-container d-none d-lg-block">
                <img src={`./assets/img/portfolio/${imgName}.png`} alt={imgName} className="img-fluid clickable"/>
                <ul className="icon">
                    <li>
                        <a
                            href="/#"
                            data-tip={iconViewText}
                            onClick={() => {
                                showPortfolioModal(title, imgName, projectUrlText, projectUrl, projectCodeUrlText, projectCodeUrl, projectDescriptionText, projectDescription);
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </li>
                    <li>
                        <a
                            href={projectUrl.link}
                            data-tip={iconLinkText}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    </li>
                </ul>
                <div className="box-content">
                    <h3 className="title">{ title }</h3>
                </div>
            </div>
        </div>
    );
};

PortfolioItemComponent.propTypes = {
    title: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired,
    projectUrlText: PropTypes.string.isRequired,
    projectUrl: PropTypes.object.isRequired,
    projectCodeUrlText: PropTypes.string.isRequired,
    projectCodeUrl: PropTypes.object.isRequired,
    projectDescriptionText: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    iconViewText: PropTypes.string.isRequired,
    iconLinkText: PropTypes.string.isRequired
};

export default PortfolioItemComponent;
