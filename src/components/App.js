import React, { Component } from 'react';
import HCardBuilder from './hCardBuilder';
import HCardPreview from './hCardPreview';
import Main from '../styles/main';

export default class App extends Component {
  render() {
    return (
      <Main>
        <HCardBuilder />
        <HCardPreview />
      </Main>
    );
  }
}
