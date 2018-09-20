import { BASE_URL, API_KEY } from './constants';
import { request } from './common';

export const emptyPromise = new Promise((resolve) => resolve({ results: [] }));
const searchMovie = (text) => {
    if (!text || text.trim().length < 1) {
        return emptyPromise;
    }
    const REQUEST_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`;
    return request(REQUEST_URL);
};

const fetchConfiguration = () => {
    const REQUEST_URL = `${BASE_URL}/configuration?api_key=${API_KEY}`;
    return request(REQUEST_URL);
};

const API = {
    fetchConfiguration,
    searchMovie,
}

export default API;