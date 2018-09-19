import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Searchbar from './searchbar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: undefined,
        };
    }

    onSearchValueChangeHandler(searchValue) {
        this.setState({
            searchValue,
        });
    }

    render() {
        return (
            <Searchbar
                searchValue={this.state.searchValue}
                onSearchValueChange={(searchValue) => this.onSearchValueChangeHandler(searchValue)}
            />
        );
    }
}

export default hot(module)(App);