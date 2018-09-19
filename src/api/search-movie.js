import { BASE_URL, API_KEY } from './constants';

const checkStatus = (response) => {
    if (response.status !== 200) {
        console.log('bounce! http code: ', response.status);
        throw new Error(`bounce! http code: ${response.status}`);
    }

    return response;
};

const parseJSON = (response) => {
    return response.json().then((data) => data);
};

const handleError = (err) => {
    console.log('error!', err);
};

export const searchMovie = (text = '') => {
    const REQUEST_URL = `${BASE_URL}/movie?api_key=${API_KEY}&query=${text}`;
    return fetch(REQUEST_URL)
        .then(checkStatus)
        .then(parseJSON)
        .catch(handleError);
};