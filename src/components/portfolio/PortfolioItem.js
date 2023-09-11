import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolio } from '../../data/portfolio';
import { showPortfolioModal } from '../../helpers/sweetAlertHelper';
import PropTypes from 'prop-types';
import { useTranslation } from '../../hooks/useTranslation';

const PortfolioItem = ({
  imgName,
  projectCodeUrl,
  projectDescription,
  projectUrl,
  title,
}) => {
  const { translate } = useTranslation();
  const {
    iconLinkText,
    iconViewText,
    projectCodeUrlText,
    projectDescriptionText,
    projectUrlText,
  } = portfolio;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="d-lg-none">
        <img
          src={`./assets/img/portfolio/${imgName}.png`}
          alt={imgName}
          className="img-fluid clickable"
          onClick={() => {
            showPortfolioModal(
              imgName,
              projectCodeUrl,
              translate(projectCodeUrlText),
              projectDescription,
              translate(projectDescriptionText),
              projectUrl,
              translate(projectUrlText),
              title
            );
          }}
        />
      </div>
      <div className="portfolio-item-container d-none d-lg-block">
        <img
          src={`./assets/img/portfolio/${imgName}.png`}
          alt={imgName}
          className="img-fluid clickable"
        />
        <ul className="icon">
          <li>
            <a
              href="/#"
              data-tip={translate(iconViewText)}
              onClick={() => {
                showPortfolioModal(
                  imgName,
                  projectCodeUrl,
                  translate(projectCodeUrlText),
                  projectDescription,
                  translate(projectDescriptionText),
                  projectUrl,
                  translate(projectUrlText),
                  title
                );
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </li>
          <li>
            <a
              href={projectUrl.link}
              data-tip={translate(iconLinkText)}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </li>
        </ul>
        <div className="box-content">
          <h3 className="title">{title}</h3>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  imgName: PropTypes.string.isRequired,
  projectCodeUrl: PropTypes.object.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectUrl: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioItem;
