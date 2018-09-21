import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { fontSizes } from '../../styles/constants';

const Wrapper = glamorous.div({
   display: 'flex',
   flexFlow: 'row nowrap',
   justifyContent: 'center', 
});
export const Input = glamorous.input({
    width: '100%',
    height: '3rem',
    marginTop: '1rem',
    padding: '.5rem 1.5rem',
    border: 'none',
    fontSize: fontSizes.small,
    outline: 'none',
});
const Searchbar = ({ searchValue, onSearchValueChange }) => (
    <Wrapper>
        <Input
            placeholder={'Search for a movie, tv show, person, etc.'}
            value={searchValue}
            onChange={(event) => onSearchValueChange(event.target.value)}
        />
    </Wrapper>
);

Searchbar.propTypes = {
    searchValue: PropTypes.string,
    onSearchValueChange: PropTypes.func.isRequired,
};

export default Searchbar;