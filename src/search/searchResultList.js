import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SearchResultItem from './searchResultItem';

const OuterWrapper = glamorous.div({
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    marginTop: '1rem',
});
const InnerWrapper = glamorous.div({
    width: '80%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'left',
})

const SearchResultList = ({ movies, onMovieClicked }) => {
    const movieList = movies.map((movie) => (
        <div>
            <SearchResultItem
                key={movie.id}
                movie={movie}
                onMovieClicked={onMovieClicked}
            />
        </div>
    ));

    return (
        <OuterWrapper>
            <InnerWrapper>{movieList}</InnerWrapper>
        </OuterWrapper>
    );
};

SearchResultList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    onMovieClicked: PropTypes.func.isRequired,
};

export default SearchResultList;