import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;  
  color: ${({ theme }) => theme.main_Color_2};
  font-family: 'Ubuntu', 'sans-serif';
  font-size: 16px;
}

body,
h1,
h2,
p,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1{
  //margin-bottom: 45px;
  font-size: 22px;
  letter-spacing: 0.4px;
}

h2{
  //margin-bottom: 20px;
  font-size: 18px;
  letter-spacing: 0.4px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;
