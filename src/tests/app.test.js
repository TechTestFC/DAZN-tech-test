import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import Searchbar from '../search/searchbar';

describe('<App />', () => {
    let searchMovieFn, API;
    beforeEach(() => {
        searchMovieFn = jest.fn().mockImplementation(() => new Promise((resolve) => { resolve(); }));
        API = {
            searchMovie: searchMovieFn,
        };
    }); 
    it('should render a Searchbar', () => {
        const component = shallow(<App API={API} />);

        const searchbar = component.find(Searchbar);
        expect(searchbar.length).toBe(1)
        expect(searchbar.props().searchValue).toBeUndefined();
        expect(searchbar.props().onSearchValueChange).toBeDefined();
    });
    it('should edit state.searchValue when Searchbar changes value', () => {
        const component = shallow(<App API={API} />);

        const newValue = 'Star Wars';
        component.find(Searchbar).props().onSearchValueChange(newValue);
        expect(component.state().searchValue).toBe(newValue);
    });
    it('should set state.movies when API search finishes', async () => {
        const data = {
            results: [{ title: 'Star Wars' }, { title: 'Star Trek' }, { title: 'Stargate' }],
        };
        searchMovieFn.mockImplementation(() => new Promise((resolve) => { resolve(data); }))
        
        const component = shallow(<App API={API} />);
        
        const newValue = 'Star';
        await component.find(Searchbar).props().onSearchValueChange(newValue);

        expect(component.state().movies).toEqual(['Star Wars', 'Star Trek', 'Stargate']);
    });
});