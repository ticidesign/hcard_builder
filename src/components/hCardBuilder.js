import React, { Component } from 'react';
import Section from '../styles/section';
import H1 from '../styles/h1';
import H2 from '../styles/h2';
import Form from '../styles/form';
import Label from '../styles/label';
import Input from '../styles/input';
import Button from '../styles/button';

export default class hCardBuilder extends Component {
  render() {
    return(
      <Section color='white' width='48%'>
        <H1>hCard Builder</H1>
        <Form>
          <H2>Personal Details</H2>
          <Label htmlFor='given_name'>Given Name
            <Input id='given_name' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='surname'>Surname
            <Input id='surname' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='email'>Email
            <Input id='email' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='phone'>Phone
            <Input id='phone' type='text' required placeholder='' />
          </Label>

          <H2>Address</H2>
          <Label htmlFor='house'>House name or #
            <Input id='house' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='street'>Street
            <Input id='street' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='suburb'>Suburb
            <Input id='suburb' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='state'>State
            <Input id='state' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='postcode'>Postcode
            <Input id='postcode' type='text' required placeholder='' />
          </Label>
          <Label htmlFor='country'>Country
            <Input id='country' type='text' required placeholder='' />
          </Label>
          <Button bgcolor='#627b8b' shadow='#3f515d'>Upload Avatar</Button>
          <Button bgcolor='#3498db' shadow='#2980b9' type='submit'>Create hCard</Button>
        </Form>
      </Section>
    )
  }
}