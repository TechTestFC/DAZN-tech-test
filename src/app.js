import React, { Component } from 'react';
import glamorous from 'glamorous';
import { hot } from 'react-hot-loader';

const RedParagraph = glamorous.p({
    color: 'red',
});

class App extends Component {
  render() {
    return (
      <RedParagraph>hi!</RedParagraph>
    );
  }
}

export default hot(module)(App);