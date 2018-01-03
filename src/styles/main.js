import styled from 'styled-components';

// Create a Wrapper component that'll render a <main> tag with some styles
export default styled.main`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  @media only screen and (max-width: 1024px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;
//  background: url('/design.jpg') no-repeat top left;