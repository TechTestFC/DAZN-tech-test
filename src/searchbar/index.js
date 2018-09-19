import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ searchValue, onSearchValueChange }) => (
    <div>
        <input
            placeholder={'Search for a movie, tv show, person, etc.'}
            value={searchValue}
            onChange={(event) => onSearchValueChange(event.target.value)}
        />
    </div>
);

Searchbar.propTypes = {
    searchValue: PropTypes.string,
    onSearchValueChange: PropTypes.func.isRequired,
};

export default Searchbar;