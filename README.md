# Overview
The goal of this repository is to have a basic website using [The Movie DB's api](https://www.themoviedb.org).

This is a technical test for the company [DAZN](https://www.dazn.com/).

# Getting started
- Clone the repository
- Run `npm install`

## Run the website
- Run `npm start`

## Run the tests
- Run `npm test`

# Technical decisions
- React, obviously, as the job is React focused.
- I wanted to get started fairly fast, which is why I used [this link](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658) to get some boilerplate code for webpack / babel / hot reloading, with the expection of css-loader / style-loader as I prefer to use JSS over stylesheets.
- [Jest](https://jestjs.io/en/) / [Enzyme](https://airbnb.io/enzyme/) for testing, simply because it is the combo I'm using the most at the moment so I feel comfortable with it. 
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for http calls, as it is becoming browser-standard.
- [Glamorous](https://glamorous.rocks/) over stylesheets. As mentioned earlier, I prefer this over stylesheets. Basically, with React, I already bundle template and logic together. Makes sense to bundle style too, and glamorous adds nice utilities to make loads of styles reusables, centralized, etc.
