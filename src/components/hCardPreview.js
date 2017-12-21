import React, { Component } from 'react';
import Section from '../styles/section';
import H3 from '../styles/h3';
import Card from '../styles/card';
import Header from '../styles/header';

export default class hCardPreview extends Component {
  render() {
    return(
      <Section color='#e1e4e7'>
        <H3 align='right'>hCard Preview</H3>
        <Card>
          <Header>
            <img src='/avatar.jpg' alt='Avatar' />
            <h1>Sam Fairfax</h1>
          </Header>

        </Card>

      </Section>
    )
  }
}