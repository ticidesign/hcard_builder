import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800|Merriweather:400,700');
  
  html {
    margin: 0;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow-x: hidden; 
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: lightblue;
  }

  #react-root, #react-root > div {
    min-height: 100%;
  }
`;
