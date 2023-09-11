import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const CoursesAndCertificationsItem = ({ courseName, institute, link = '' }) => {
  const courseCertificationSpan = `<span>${courseName} // <em>${institute}</em></span>`;
  const courseCertificationItem = parse(
    link
      ? `<a href="${link}" target="_blank" rel="noreferrer">${courseCertificationSpan}</a>`
      : courseCertificationSpan
  );

  return (
    <li className="pb-0">
      <p className="mb-2 text-justify">{courseCertificationItem}</p>
    </li>
  );
};

CoursesAndCertificationsItem.propTypes = {
  courseName: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CoursesAndCertificationsItem;
