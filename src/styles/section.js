import styled from 'styled-components';

// Create a Section component that'll render a <section> tag with some styles
export default styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: ${props => props.width ? props.width : '50%'};
  padding: 38px 40px 25px 40px;
  background-color: ${props => props.color};
  @media only screen and (max-width: 1024px) {
    order: ${props => props.order ? props.order : '1'};
    width: calc(100% - 40px);
    padding: 20px;
  }
`;