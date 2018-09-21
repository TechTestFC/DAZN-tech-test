import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'react-modal';
import App, { Title, extractImage } from '../app';
import Searchbar from '../search/searchbar';
import waitingLogo from '../../assets/waiting-logo.png';
import notFoundLogo from '../../assets/not-found-logo.png';
import SearchResultList from '../search/searchResultList';

describe('<App />', () => {
    let API;
    beforeEach(() => {
        const fetchConfigurationData = {
            images: {
                base_url: 'http://somewhere',
            },
        };
        const fetchConfigurationMock = () => {
            return new Promise((resolve) => {
                resolve(fetchConfigurationData);
            });
        }
        const fetchConfigurationFn = jest.fn().mockImplementation(fetchConfigurationMock);
        const searchMovieData = {
            results: [{ title: 'Star Wars' }, { title: 'Star Trek' }, { title: 'Stargate' }],
        };
        const searchMovieMock = (text) => {
            return new Promise((resolve) => {
                resolve(searchMovieData);
            })
        };
        const searchMovieFn = jest.fn().mockImplementation(searchMovieMock);
            API = {
            fetchConfiguration: fetchConfigurationFn,
            searchMovie: searchMovieFn,
        };
    });
    it('should render a Searchbar', () => {
        const component = shallow(<App API={API} />);

        const searchbar = component.find(Searchbar);
        expect(searchbar.length).toBe(1)
        expect(searchbar.props().searchValue).toBe('');
        expect(searchbar.props().onSearchValueChange).toBeDefined();
        expect(component.find(Title).length).toBe(1);
    });
    it('should edit state.searchValue when Searchbar changes value', () => {
        const component = shallow(<App API={API} />);

        const newValue = 'Star Wars';
        component.find(Searchbar).props().onSearchValueChange(newValue);
        expect(component.state().searchValue).toBe(newValue);
    });
    it('should set state.movies when API search finishes', (done) => {
        const component = shallow(<App API={API} />);

        const newValue = 'Star';
        component.find(Searchbar).props().onSearchValueChange(newValue);

        setTimeout(() => {
            expect(API.searchMovie).toHaveBeenCalledTimes(1);
            expect(API.searchMovie).toHaveBeenLastCalledWith('Star');
            expect(component.state().movies).toEqual([{ title: 'Star Wars' }, { title: 'Star Trek' }, { title: 'Stargate' }]);
            done();
        }, 600);
    });
    it('should set state.selectedMovie when a movie is clicked', () => {
        const component = shallow(<App API={API} />);

        const movie = { title: 'Star Wars' };
        component.find(SearchResultList).props().onMovieClicked(movie);
        expect(component.state().selectedMovie).toEqual(movie);
    });
    it('should set state.selectMovie when modal closes', () => {
        const component = shallow(<App API={API} />);

        component.setState({ selectedMovie: { Title: 'Terminator 2' } });
        component.find(Modal).props().onRequestClose();

        expect(component.state().selectedMovie).toBeNull();
    });
    describe('extractImage', () => {
        it('should return waitingLogo', () => {
            expect(extractImage()).toEqual(waitingLogo);
        });
        it('should return notFoundLogo', () => {
            expect(extractImage({ base_url: 'http://somewhere' })).toEqual(notFoundLogo);
        });
        it('should return the full path', () => {
            expect(extractImage({ base_url: 'http://somewhere/' }, '/on_the_internet')).toBe('http://somewhere/original/on_the_internet');
        });
        it('should override default size', () => {
            expect(extractImage({ base_url: 'http://somewhere/' }, '/on_the_internet', 'w45')).toBe('http://somewhere/w45/on_the_internet');
        });
    });
});