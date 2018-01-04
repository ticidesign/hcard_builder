import styled from 'styled-components';

export default styled.label`
width: calc(50% - 30px);
font-family: "Merriweather Sans";
font-size: 20px;
font-weight: 400;
text-align: center;
color: #ffffff;
border: none;
border-radius: 3px;
background: ${props => props.bgcolor ? props.bgcolor : '#000000'};
box-shadow: 0px 4px 0px 0px ${props => props.shadow ? props.shadow : '#333333'};
margin-top: 18px;
padding: 6px 12px;
transform: perspective(1px) translateZ(0);
transition: all 0.2s ease-in-out;
cursor: pointer;
input{
  display: none;
}
&:hover{
  transform: scale(1.1);
}  
@media only screen and (max-width: 768px) {
  width: calc(100% - 32px);
}
`;
