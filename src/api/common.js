export const checkStatus = (response) => {
    if (response.status !== 200) {
        console.log('bounce! http code: ', response.status);
        throw new Error(`bounce! http code: ${response.status}`);
    }

    return response;
};

export const parseJSON = (response) => {
    return response.json().then((data) => data);
};

export const handleError = (err) => {
    console.log('error!', err);
};

export const request = (requestURL, options) => {
    return fetch(requestURL, options)
        .then(checkStatus)
        .then(parseJSON)
        .catch(handleError);
} 