import styled from 'styled-components';

// Create a Section component that'll render a <section> tag with some styles
export default styled.section`
  width: ${props => props.width ? props.width : '50%'};
  padding: 38px 40px 25px 40px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
    width: calc(90% - 80px);
  }
`;