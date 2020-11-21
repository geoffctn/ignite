import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  }
  body {
    font-family: 'Nunito', sans-serif;
  }
  h2 {
    font-family: 'Staatliches', serif;
    font-size: 3rem;
  }
  h3 {
    padding: 1.5rem 0;
    font-size: 1.3rem;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  img {
    display: block;
  }
  input {    
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
  }
`

export default GlobalStyles
