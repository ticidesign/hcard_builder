import React, { Component } from 'react';
import CardView from './cardView';
import Section from '../styles/section';
import H3 from '../styles/h3';

export default class hCardPreview extends Component {
  render() {
    return(
      <Section color='#e1e4e7' width='52%' order='0'>
        <H3 align='right'>hCard Preview</H3>
          <CardView info={this.props.info}/>
      </Section>
    )
  }
}        
// {
//   Object
//     .keys(this.props.info)
//     .map(key => <CardContainer key={key} index={key} info={this.props.info[key]}/>)
// }