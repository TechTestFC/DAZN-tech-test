import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from '..';

describe('<Searchbar />', () => {
    it('should render an input', () => {
        const searchValue = 'Star';
        const component = shallow(<Searchbar searchValue={searchValue} onSearchValueChange={() => {}} />);

        const input = component.find('input');
        expect(input.length).toBe(1);
        expect(input.props().value).toBe(searchValue);
        expect(input.props().onChange).toBeDefined();
    });
    it('should trigger onSearchValueChange when input.onChange is triggered', () => {
        const onSearchValueChange = jest.fn();
        const component = shallow(<Searchbar searchValue={'Star'} onSearchValueChange={onSearchValueChange} />);
        
        const input = component.find('input');
        const newValue = 'Star Wars';
        input.props().onChange({ target: { value: newValue } });
        expect(onSearchValueChange).toHaveBeenCalledTimes(1);
        expect(onSearchValueChange).toHaveBeenLastCalledWith(newValue);
    });
});