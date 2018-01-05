import styled from 'styled-components';

// Create a Section component that'll render a <section> tag with some styles
export default styled.div`
  width: calc(100% - 50px);
  padding: 0 25px 25px 25px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: space-between;
  div {
    display: block;
    width: 100%;
    border-bottom: 1px solid #c3c4c3;
    padding: 0 0 4px 0;
    margin-bottom: 13px;
    height: 16px;
  }
`;