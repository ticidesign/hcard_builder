import styled from 'styled-components';

export default styled.button`
  width: calc(50% - 10px);
  font-family: "Merriweather Sans";
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  background: ${props => props.bgcolor};
  box-shadow: 0px 4px 0px 0px ${props => props.shadow};
  margin-top: 18px;
  padding: 6px 12px;
  transform: perspective(1px) translateZ(0);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
  }  
  @media only screen and (max-width: 768px) {
    width: calc(100% - 10px);
  }
`;
