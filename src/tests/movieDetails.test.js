import React from 'react';
import { shallow } from 'enzyme';
import MovieDetails, { CloseButton } from '../movieDetails';

describe('<MovieDetails />', () => {
    it('should not render if movie is not defined', () => {
        const component = shallow(<MovieDetails />);
        expect(component.getElement()).toBeNull();
    });
    it('should render all the necessary components', () => {
        const movie = {
            backdrop_path: 'some-url',
            title: 'Some title',
            release_date: '2018-09-21',
            vote_average: 10,
            vote_count: 1000,
            overview: 'Some overview',
        };
        const onCloseMovieFn = jest.fn();

        const component = shallow(<MovieDetails movie={movie} onCloseMovie={onCloseMovieFn} />);
        
        expect(component.find(CloseButton).length).toBe(1);
    });
    it('should trigger onCloseMovie when CloseButton.onClick is triggered', () => {
        const movie = {
            backdrop_path: 'some-url',
            title: 'Some title',
            release_date: '2018-09-21',
            vote_average: 10,
            vote_count: 1000,
            overview: 'Some overview',
        };
        const onCloseMovieFn = jest.fn();

        const component = shallow(<MovieDetails movie={movie} onCloseMovie={onCloseMovieFn} />);
        
        component.find(CloseButton).props().onClick();
        expect(onCloseMovieFn).toHaveBeenCalledTimes(1);
    });
});