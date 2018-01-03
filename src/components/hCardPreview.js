import React, { Component } from 'react';
import Section from '../styles/section';
import H3 from '../styles/h3';
import Card from '../styles/card';
import Header from '../styles/header';
import Container from '../styles/container';

export default class hCardPreview extends Component {
  render() {
    return(
      <Section color='#e1e4e7' width='52%'>
        <H3 align='right'>hCard Preview</H3>
        <Card>
          <Header>
            <img src='/avatar.jpg' alt='Avatar' />
            <h1>Sam Fairfax</h1>
          </Header>
          <Container>
            <div>
              <span>Email</span>
              <span>dsfsfdsd</span>
            </div>

            <div>
              <span>Phone</span>
              <span>ddsffd</span>
            </div>

            <div>
              <span>Address</span>
              <span>sdffds</span>
            </div>

            <div>
              <span></span>
              <span>sdffds</span>
            </div>

            <div>
              <span>Postcode</span>
              <span>sdfsdf</span>
              <span>Country</span>
              <span>dsfsdfsd</span>
            </div>

          </Container>

        </Card>
      </Section>
    )
  }
}