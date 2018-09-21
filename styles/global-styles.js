import { css } from 'glamor'

css.global('html, body',  {
    margin: 0,
    padding: 0,
    fontSize: '16px', // consistent 1rem = 10px
});

css.global('*', {
    boxSizing: 'border-box',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
});