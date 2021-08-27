import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

*:where(:not(iframe):not(canvas):not(img):not(svg):not(video):not(svg *)) {
    all: unset;
    display: revert; }
 
  *,
  *::before,
  *::after {
    box-sizing: border-box; }
  
  ol, ul {
    list-style: none; }
  
  img {
    max-width: 100%; }

  body {
    background-color: #dfe3ee;
  }

`;
 
export default GlobalStyle;