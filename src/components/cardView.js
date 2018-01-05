import React, { Component } from 'react';
import Card from '../styles/card';
import Header from '../styles/header';
import Title from '../styles/title';
import Img from '../styles/img';
import Container from '../styles/info';
import Wrapper from '../styles/wrapper';
import Detail from '../styles/detail';
import Result from '../styles/result';

export default class CardContainer extends Component {
  render() {
    const { info } = this.props;
    return(
      <Card>
        <Header>
          <Img 
            src={info.upload ? info.upload : 'avatar.jpg'} 
            alt={info.given_name ? info.given_name : 'Avatar'} 
          />
          <Title>{info.given_name} {info.surname}</Title>
        </Header>
        <Container>
          <Wrapper>
            <Detail>Email</Detail>
            <Result>{info.email}</Result>
          </Wrapper>

          <Wrapper>
            <Detail>Phone</Detail>
            <Result>{info.phone}</Result>
          </Wrapper>

          <Wrapper>
            <Detail>Address</Detail>
            <Result>{info.house} {info.street}</Result>
          </Wrapper>

          <Wrapper>
            <Detail></Detail>
            <Result>{info.suburb} {info.place}</Result>
          </Wrapper>

          <Wrapper>
            <Detail>Postcode</Detail>
            <Result>{info.postcode}</Result>
            <Detail>Country</Detail>
            <Result>{info.country}</Result>
          </Wrapper>

        </Container>

      </Card>
    )
  }
}