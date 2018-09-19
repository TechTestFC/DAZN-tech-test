import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Searchbar from './search/searchbar';
import API from './api';
import { debounce } from '../utils/async-utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: undefined,
            movies: [],
        };
        this.debouncedFetchMovies = debounce(this.fetchMovies, 500);
    }

    fetchMovies(searchValue) {
        this.props.API.searchMovie(searchValue).then((data) => {
            const movies = data.results.map((result) => result.title);
            this.setState({ movies });
        });
    }

    onSearchValueChangeHandler(searchValue) {
        this.setState({
            searchValue,
        });
        this.debouncedFetchMovies(searchValue);
    }

    render() {
        const movies = this.state.movies.map((movie) => <p>{movie}</p>);
        return (
            <div>
                <Searchbar
                    searchValue={this.state.searchValue}
                    onSearchValueChange={(searchValue) => this.onSearchValueChangeHandler(searchValue)}
                />
                <div>{movies}</div>
            </div>
        );
    }
}

App.propTypes = {
    API: PropTypes.object.isRequired,
};

export default hot(module)(App);