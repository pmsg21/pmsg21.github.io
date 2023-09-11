import PropTypes from 'prop-types';
import { useTranslation } from '../../hooks/useTranslation';

const ResumeItem = ({
  company,
  description,
  position,
  yearFrom,
  yearTo,
  skillsUsed,
}) => {
  const { translate } = useTranslation();

  return (
    <>
      <h4>
        {position} - {company}
      </h4>
      <h5>
        {yearFrom} - {yearTo}
      </h5>
      <ul className="mb-0">
        {description.map(({ id, text, subdescription }) => (
          <div key={`description_${id}`}>
            <li>{translate(text)}</li>
            {subdescription && (
              <ul>
                {subdescription.map(({ id, text }) => (
                  <li key={`subdescription_${id}`}>{translate(text)}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
      <div className="d-flex flex-row flex-wrap">
        {skillsUsed.map(({ id, name }) => (
          <span key={`skill_${id}`} className="skills-used-badge mr-2 mb-2">
            {name}
          </span>
        ))}
      </div>
    </>
  );
};

ResumeItem.propTypes = {
  company: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  yearFrom: PropTypes.string.isRequired,
  yearTo: PropTypes.string.isRequired,
};

export default ResumeItem;
