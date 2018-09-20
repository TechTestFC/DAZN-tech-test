import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const Img = glamorous.img({});
export const Title = glamorous.span({});

const SearchResultItem = ({ movie }) => (
    <div>
        <Img src={movie.poster_path} />
        <Title>{movie.title}</Title>
    </div>
);

SearchResultItem.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default SearchResultItem;