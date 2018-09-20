import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SearchResultItem from './searchResultItem';

const Wrapper = glamorous.div({});

const SearchResultList = ({ movies }) => {
    const movieList = movies.map((movie) => <SearchResultItem key={movie.id} movie={movie} />);
    return <Wrapper>{movieList}</Wrapper>;
};

SearchResultList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default SearchResultList;