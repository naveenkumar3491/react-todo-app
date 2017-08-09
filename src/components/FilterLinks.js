import React from 'react';
import constants from '../constants';

const { ALL, ACTIVE, COMPLETED } = constants;

const Link = ({ currentFilter, filterName, onFilterChange }) => {
    let linkStyle = { marginLeft: '3px', marginRight: '3px' };
    if (currentFilter === filterName) {
        linkStyle = {
            marginLeft: '3px', marginRight: '3px',
            backgroundColor: '#e6e6e6', borderColor: '#adadad', lineHeight: '1.5'
        };
    }
    return (
        <a href="#"
            onClick={evt => onFilterChange(evt, filterName)}
            className="btn btn-default btn-small"
            style={linkStyle}>
            <strong>{filterName}</strong>
        </a>
    );
}

const FilterLinks = props => (
    <div style={{ marginBottom: '30px' }}>
        {'Display: '}
        <Link {...props} filterName={ALL} />
        <Link {...props} filterName={ACTIVE} />
        <Link {...props} filterName={COMPLETED} />
    </div>
);

export default FilterLinks;