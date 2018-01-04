import React, { Component } from 'react';
import HCardBuilder from './hCardBuilder';
import HCardPreview from './hCardPreview';
import Main from '../styles/main';

export default class App extends Component {
  constructor() {
    super();

    this.updateCard = this.updateCard.bind(this);
    // this.showCard = this.showCard.bind(this);

    //get Initial State
    this.state = {
      info: '',
    };
  }

  updateCard(updatedInfo) {
    this.setState({ info: updatedInfo });
  }
  // showCard(newcard){
  //   const info = {...this.state.info};
  //   const timestamp = Date.now();
  //   info[`newcard-${timestamp}`] = newcard;
  //   this.setState({ info })
  // }

  render() {
    return (
      <Main>
        <HCardBuilder
          info={this.state.info} 
          // showCard={this.showCard} 
          updateCard={this.updateCard}
        />
        <HCardPreview info={this.state.info} />
      </Main>
    );
  }
}
