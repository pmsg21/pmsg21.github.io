import React from 'react';
import PropTypes from 'prop-types';

const ResumeItemComponent = ({position, company, yearFrom, yearTo, description, index}) => {
    return (
        <div className={`resume-item ${index === 0 ? 'mt-2' : ''}`}>
            <h4>{position} - {company}</h4>
            <h5>{yearFrom} - {yearTo}</h5>
            <p className="text-justify">{description}</p>
        </div>
    );
};

ResumeItemComponent.propTypes = {
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    yearFrom: PropTypes.string.isRequired,
    yearTo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ResumeItemComponent;
