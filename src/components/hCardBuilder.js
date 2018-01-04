import React, { Component } from 'react';
import Section from '../styles/section';
import H1 from '../styles/h1';
import H2 from '../styles/h2';
import Form from '../styles/form';
import Label from '../styles/label';
import LabelFile from '../styles/labelfile';
import Input from '../styles/input';
import Button from '../styles/button';


export default class hCardBuilder extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.openFile = this.openFile.bind(this);
  }
 
  handleChange(e) {
    const info = this.props.info;
    const updatedCard = {
      ...info,
      [e.target.id]: e.target.value
    }
    this.props.updateCard(updatedCard);
  }

  openFile(e){
    const info = this.props.info;
    let reader = new FileReader();
    let file = e.target.files[0];
    let image = e.target.id;

    reader.onloadend = () => {
      const updatedCard = {
        ...info,
        [image]: reader.result
      }
      this.props.updateCard(updatedCard);
    }
    reader.readAsDataURL(file)
  }

  // createhCard(event){
  //   event.preventDefault();
  //   const info = {
  //     givenname: this.givenname.value,
  //     surname: this.surname.value,
  //     email: this.email.value,
  //     phone: this.phone.value,
  //     house: this.house.value,
  //     street: this.street.value,
  //     suburb: this.suburb.value,
  //     state: this.place.value,
  //     postcode: this.postcode.value,
  //     country: this.country.value,
  //   }
  //   this.props.showCard(info);
  //   //Reset form after submit
  //   // this.cardForm.reset();
  // }

  render() {
    return(
      <Section color='white' width='48%'>
        <H1>hCard Builder</H1>
         <Form 
          innerRef={(input) => this.cardForm = input}
          // onSubmit={(e) => this.createhCard(e)}
         >
          <H2>Personal Details</H2>
          <Label htmlFor='given_name'>Given Name
            <Input innerRef={(input) => this.givenname = input} id='given_name' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='surname'>Surname
            <Input innerRef={(input) => this.surname = input} id='surname' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='email'>Email
            <Input innerRef={(input) => this.email = input} id='email' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='phone'>Phone
            <Input innerRef={(input) => this.phone = input} id='phone' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>

          <H2>Address</H2>
          <Label htmlFor='house'>House name or #
            <Input innerRef={(input) => this.house = input} id='house' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='street'>Street
            <Input innerRef={(input) => this.street = input} id='street' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='suburb'>Suburb
            <Input innerRef={(input) => this.suburb = input} id='suburb' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='place'>State
            <Input innerRef={(input) => this.place = input} id='place' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='postcode'>Postcode
            <Input innerRef={(input) => this.postcode = input} id='postcode' type='number' maxlength='4' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <Label htmlFor='country'>Country
            <Input innerRef={(input) => this.country = input} id='country' type='text' required placeholder='' onChange={(e) => this.handleChange(e)} />
          </Label>
          <LabelFile htmlFor='upload' bgcolor='#627b8b' shadow='#3f515d'>Upload Avatar
            <input ref={(input) => this.upload = input} id='upload' type='file' required placeholder='' onChange={(e) => this.openFile(e)} />
          </LabelFile>
          <Button bgcolor='#3498db' shadow='#2980b9' type='submit'>Create hCard</Button>
        </Form>
      </Section>
    )
  }
}