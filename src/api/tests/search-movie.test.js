import { BASE_URL, API_KEY } from '../constants'; 
import { searchMovie } from '../search-movie';

describe('searchMovie', () => {
    let fetchFn, responseJsonFn;
    beforeEach(() => {
        responseJsonFn = jest.fn().mockImplementation(() => new Promise((resolve) => { resolve(); }));
        fetchFn = jest.fn().mockImplementation(() => new Promise((resolve) => resolve({ status: 200, json: responseJsonFn })));
        global.fetch = fetchFn;
    });
    it('should fetch with the right url', async () => {
        const text = 'Star';
        await searchMovie(text);

        const url = fetchFn.mock.calls[0][0];
        console.log(url);
        
        expect(fetchFn).toHaveBeenCalledTimes(1);
        expect(url).toContain(BASE_URL);
        expect(url).toContain(API_KEY);
        expect(url).toContain(text);
    });
    it('should log the error', async () => {
        const consoleLogFn = jest.fn();
        global.console = {
            log: consoleLogFn,
        };
        const status = 500;
        const error = new Error(`bounce! http code: ${status}`);
        fetchFn = jest.fn().mockImplementation(() => new Promise((resolve) => resolve({ status })));
        global.fetch = fetchFn;
        
        await searchMovie();
        expect(consoleLogFn).toHaveBeenCalledTimes(2);
        const loggedStatus = consoleLogFn.mock.calls[0][1];
        expect(loggedStatus).toBe(status);
        const loggedError = consoleLogFn.mock.calls[1][1];
        expect(loggedError).toEqual(error);
    });
});