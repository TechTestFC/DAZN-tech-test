import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Searchbar from './search/searchbar';
import { debounce } from '../utils/async-utils';
import waitingLogo from '../assets/waiting-logo.png';
import notFoundLogo from '../assets/not-found-logo.png';
import SearchResultList from './search/searchResultList';

export const extractImage = (imagesConfiguration, poster_path) => {
    if (!imagesConfiguration) {
        return waitingLogo;
    }

    if (!poster_path) {
        return notFoundLogo;
    }

    return `${imagesConfiguration.base_url}w45${poster_path}`;
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            movies: [],
        };
        this.debouncedFetchMovies = debounce(this.fetchMovies, 500);
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
            <div>
                <Searchbar
                    searchValue={this.state.searchValue}
                    onSearchValueChange={(searchValue) => this.onSearchValueChangeHandler(searchValue)}
                />
                <SearchResultList movies={movies} />
            </div>
        );
    }
}

App.propTypes = {
    API: PropTypes.object.isRequired,
};

export default hot(module)(App);