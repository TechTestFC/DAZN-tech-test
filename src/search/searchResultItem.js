import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { getFullTitle } from '../utils/movie-utils';

export const Wrapper = glamorous.div({
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: '.6rem',
    backgroundColor: 'white',
    border: '.1rem solid black',
    borderRadius: '.3rem',
    marginBottom: '.1rem',
    transition: 'background-color .6s ease',
    '&:hover': {
        backgroundColor: '#d5e8f8',
    },
    cursor: 'pointer',
})
export const Img = glamorous.img({
    borderRadius: '.5rem',
    maxWidth: '45px',
    maxHeight: '68px',
});
const ContentBox = glamorous.div({
    flexGrow: 1,
});
export const Title = glamorous.h4({
    margin: '0 0 0 1.5rem',
});

const SearchResultItem = ({ movie, onMovieClicked }) => {
    const fullTitle = getFullTitle(movie);
    return (
        <Wrapper onClick={() => onMovieClicked(movie)}>
            <Img src={movie.poster_path} />
            <ContentBox>
                <Title>{fullTitle}</Title>
            </ContentBox>
        </Wrapper>
    );
};

SearchResultItem.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClicked: PropTypes.func.isRequired,
};

export default SearchResultItem;