import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
  color: ${({ theme }) => theme.main_Color_2};
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: ${({ theme }) => theme.main_Background};
  background-color: beige;
}

body,
h1,
p,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
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
