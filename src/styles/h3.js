import styled from 'styled-components';

export default styled.h3`
  width: 100%;
  margin-bottom: 4px;
  font-family: "Merriweather Sans";
  font-size: 16px;
  font-weight: 400;
  color: rgb(149, 165, 166);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: ${props => props.align ? props.align : 'left'};
`;
