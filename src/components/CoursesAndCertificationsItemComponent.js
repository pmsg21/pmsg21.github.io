import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const CoursesAndCertificationsItemComponent = ({courseName, institute, link = ''}) => {

    const courseCerticationSpan = `<span>${courseName} // <em>${institute}</em></span>`;
    const courseCertificationItem = parse(link !== '' ? `<a href="${link}" target="_blank" rel="noreferrer">${courseCerticationSpan}</a>` : courseCerticationSpan);

    return (
        <li className="pb-0">
            <p className="mb-2 text-justify">{courseCertificationItem}</p>
        </li>
    );
};

CoursesAndCertificationsItemComponent.propTypes = {
    courseName: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default CoursesAndCertificationsItemComponent;
