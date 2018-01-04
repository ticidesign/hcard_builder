import React, { Component } from 'react';
import Card from '../styles/card';
import Header from '../styles/header';
import Container from '../styles/info';

export default class CardContainer extends Component {
  render() {
    const { info } = this.props;
    return(
      <Card>
        <Header>
          <img 
            src={info.upload ? info.upload : 'avatar.jpg'} 
            alt={info.given_name ? info.given_name : 'Avatar'} 
          />
          <h1>{info.given_name} {info.surname}</h1>
        </Header>
        <Container>
          <div>
            <span>Email</span>
            <span>{info.email}</span>
          </div>

          <div>
            <span>Phone</span>
            <span>{info.phone}</span>
          </div>

          <div>
            <span>Address</span>
            <span>{info.house} {info.street}</span>
          </div>

          <div>
            <span></span>
            <span>{info.suburb} {info.place}</span>
          </div>

          <div>
            <span>Postcode</span>
            <span>{info.postcode}</span>
            <span>Country</span>
            <span>{info.country}</span>
          </div>

        </Container>

      </Card>
    )
  }
}