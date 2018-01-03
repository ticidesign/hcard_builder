import styled from 'styled-components';

export default styled.form`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5px 0;
  @media only screen and (max-width: 768px) {
    flex-flow: column wrap;
  }
`;
