import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { getFullTitle } from './utils/movie-utils';

const Header = glamorous.div({
    display: 'flex',
    flexFlow: 'row-reverse nowrap',
    width: '100%',
})
export const CloseButton = glamorous.button({
    border: '0',
    fontWeight: 'bold',
    backgroundColor: 'white',
});
const BackdropImage = glamorous.img({
    width: '100%',
    margin: '1rem 0',
})
const MovieDetails = ({ movie, onCloseMovie }) => {
    if (!movie) {
        return null;
    }
    return (
        <div>
            <Header>
                <CloseButton onClick={() => onCloseMovie()}>X</CloseButton>
            </Header>
            <h2>{getFullTitle(movie)}</h2>
            <BackdropImage src={movie.backdrop_path} />
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Rating</h3>
            <p>{movie.vote_average}/10 ({movie.vote_count} votes)</p>
        </div>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.shape({
        backdrop_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        vote_count: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
    }),
    onCloseMovie: PropTypes.func.isRequired,
};

export default MovieDetails;