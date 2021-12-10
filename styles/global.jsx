import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
}

:root {

}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: #1976d2;
}

::-webkit-scrollbar-thumb {
  background-color: var(--gold);
  border-radius: 6px;
}

body {
  font-family: 'Roboto', Arial, sans-serif;
  width: 100%;
  min-height: 100vh;
  color: black;
  background-color: white;
  font-size: 18px;
  padding: 0;
  margin: 0;
}

a,button{
  cursor: pointer;
  color:inherit;
  font-family: inherit;
}
`;
