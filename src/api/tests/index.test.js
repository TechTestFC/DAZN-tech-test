import API, { emptyPromise } from '..';
import { BASE_URL, API_KEY } from '../constants';
import { request } from '../common';


describe('API', () => {
    let fetchFn, responseJsonFn;
    beforeEach(() => {
        responseJsonFn = jest.fn().mockImplementation(() => new Promise((resolve) => { resolve(); }));
        fetchFn = jest.fn().mockImplementation(() => new Promise((resolve) => resolve({ status: 200, json: responseJsonFn })));
        global.fetch = fetchFn;
    });
    describe('API', () => {
        describe('searchMovie', () => {
            it('should return the right request', () => {
                const text = 'Star'
                const searchMovieRequest = API.searchMovie(text);
    
                const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`;
                expect(searchMovieRequest).toEqual(request(url));
            });
            it('should return an empty promise (no text)', () => {
                const searchMovieRequest = API.searchMovie();
    
                expect(searchMovieRequest).toEqual(emptyPromise);
            });
            it('should return an empty promise (empty text)', () => {
                const searchMovieRequest = API.searchMovie('   ');
    
                expect(searchMovieRequest).toEqual(emptyPromise);
            });
        });
        describe('fetchConfiguration', () => {
            it('should return the right request', () => {
                const fetchConfigurationRequest = API.fetchConfiguration();
                
                const url = `${BASE_URL}/configuration?api_key=${API_KEY}`;
                expect(fetchConfigurationRequest).toEqual(request(url));
            });
        });
    });
});