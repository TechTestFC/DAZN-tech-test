import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';
import Searchbar from '../searchbar';

describe('<App />', () => {
    it('should render a Searchbar', () => {
        const component = shallow(<App />);

        const searchbar = component.find(Searchbar);
        expect(searchbar.length).toBe(1)
        expect(searchbar.props().searchValue).toBeUndefined();
        expect(searchbar.props().onSearchValueChange).toBeDefined();
    });
    it('should change searchValue state when Searchbar.onSearchValueChange is triggered', () => {
        const component = shallow(<App />);

        const newValue = 'Star Wars';
        component.find(Searchbar).props().onSearchValueChange(newValue);
        expect(component.state().searchValue).toBe(newValue);
    });
});