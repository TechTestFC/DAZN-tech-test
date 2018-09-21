import React, { Component } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Modal from 'react-modal';
import Searchbar from './search/searchbar';
import { debounce } from '../utils/async-utils';
import waitingLogo from '../assets/waiting-logo.png';
import notFoundLogo from '../assets/not-found-logo.png';
import SearchResultList from './search/searchResultList';
import { fontSizes } from '../styles/constants';

export const extractImage = (imagesConfiguration, poster_path) => {
    if (!imagesConfiguration) {
        return waitingLogo;
    }

    if (!poster_path) {
        return notFoundLogo;
    }

    return `${imagesConfiguration.base_url}w45${poster_path}`;
};

const Wrapper = glamorous.div({
    width: '100%',
    minHeight: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: '#f0f0f0',
});

export const Title = glamorous.h1({
    textAlign: 'center',
    paddingTop: '1rem',
    marginBottom: '1rem',
    fontSize: fontSizes.huge,
    color: '#9E9E9E',
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            movies: [],
            selectedMovie: null,
        };
        this.debouncedFetchMovies = debounce(this.fetchMovies, 500);
        this.onSearchValueChangeHandler = this.onSearchValueChangeHandler.bind(this);
        this.onMovieClickedHandler = this.onMovieClickedHandler.bind(this);
    }

    componentDidMount() {
        this.props.API.fetchConfiguration().then((data) => {
            const imagesConfiguration = data.images;
            this.setState({ imagesConfiguration });
        });
    }

    fetchMovies(searchValue) {
        this.props.API.searchMovie(searchValue).then((data) => {
            const movies = data.results;
            this.setState({ movies });
        });
    }

    onSearchValueChangeHandler(searchValue) {
        this.setState({
            searchValue,
        });
        this.debouncedFetchMovies(searchValue);
    }

    onMovieClickedHandler(movie) {
        this.setState({ selectedMovie: movie });
    }

    getMoviesWithFullPosterPath() {
        const { movies, imagesConfiguration } = this.state;
        return movies.map((movie) => {    
            const { poster_path, ...others } = movie;
            const updatedPosterPath = extractImage(imagesConfiguration, poster_path);
            return { ...others, poster_path: updatedPosterPath };
        });
    }

    render() {
        const movies = this.getMoviesWithFullPosterPath();
        return (
            <Wrapper>
                <Title>Movie Finder</Title>
                <Searchbar
                    searchValue={this.state.searchValue}
                    onSearchValueChange={this.onSearchValueChangeHandler}
                />
                <SearchResultList movies={movies} onMovieClicked={this.onMovieClickedHandler} />
            </Wrapper>
        );
    }
}

App.propTypes = {
    API: PropTypes.object.isRequired,
};

export default hot(module)(App);