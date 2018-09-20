import React from 'react';
import { shallow } from 'enzyme';
import SearchResultList from '../searchResultList';
import SearchResultItem from '../searchResultItem';

describe('<SearchResultList />', () => {
    it('should render the necessary component', () => {
        const movies = [
            { id: 1, title: 'Star Wars' },
            { id: 2, title: 'Star Trek' },
            { id: 3, title: 'Stargate' },
        ];
        const component = shallow(<SearchResultList movies={movies} />);

        const items = component.find(SearchResultItem);
        expect(items.length).toBe(3);
        expect(items.at(0).props().movie).toBe(movies[0]);
        expect(items.at(1).props().movie).toBe(movies[1]);
        expect(items.at(2).props().movie).toBe(movies[2]);
    });
});