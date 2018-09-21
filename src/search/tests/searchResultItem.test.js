import React from 'react';
import { shallow } from 'enzyme';
import SearchResultItem, { Wrapper, Img, Title } from '../searchResultItem';

describe('<SearchResultItem />', () => {
    it('should render the necessary components', () => {
        const movie = { poster_path: 'http://somewhere/awesome-logo.png', title: 'Some movie', release_date: '1991-10-16' };
        const component = shallow(<SearchResultItem movie={movie} />);

        const img = component.find(Img);
        expect(img.length).toBe(1);
        expect(img.props().src).toBe(movie.poster_path);
        
        const title = component.find(Title);
        expect(title.length).toBe(1);


        const releaseDate = new Date(movie.release_date);
        const fullTitle = `${movie.title} (${releaseDate.getFullYear()})`;
        expect(title.props().children).toEqual(fullTitle);
    });
    it('should trigger onMovieClicked when Wrapper.onClick is triggered', () => {
        const movie = { poster_path: 'http://somewhere/awesome-logo.png', title: 'Some movie', release_date: '1991-10-16' };
        const onMovieClickedFn = jest.fn();
        const component = shallow(<SearchResultItem movie={movie} onMovieClicked={onMovieClickedFn} />);

        component.find(Wrapper).props().onClick();
        expect(onMovieClickedFn).toHaveBeenCalledTimes(1);
        expect(onMovieClickedFn).toHaveBeenLastCalledWith(movie);
    });
});