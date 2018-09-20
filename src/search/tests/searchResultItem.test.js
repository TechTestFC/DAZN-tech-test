import React from 'react';
import { shallow } from 'enzyme';
import SearchResultItem, { Img, Title } from '../searchResultItem';

describe('<SearchResultItem />', () => {
    it('should render the necessary components', () => {
        const movie = { poster_path: 'http://somewhere/awesome-logo.png' };
        const component = shallow(<SearchResultItem movie={movie} />);

        const img = component.find(Img);
        expect(img.length).toBe(1);
        expect(img.props().src).toBe(movie.poster_path);
        
        const title = component.find(Title);
        expect(title.length).toBe(1);
        expect(title.props().children).toEqual(movie.title);
    });
});