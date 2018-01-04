import React, { Component } from 'react';
import HCardBuilder from './hCardBuilder';
import HCardPreview from './hCardPreview';
import Main from '../styles/main';

export default class App extends Component {
  constructor() {
    super();

    this.updateCard = this.updateCard.bind(this);

    //get Initial State
    this.state = {
      info: '',
    };
  }

  updateCard(updatedInfo) {
    this.setState({ info: updatedInfo });
  }

  render() {
    return (
      <Main>
        <HCardBuilder
          info={this.state.info} 
          updateCard={this.updateCard}
        />
        <HCardPreview info={this.state.info} />
      </Main>
    );
  }
}
