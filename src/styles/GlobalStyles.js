import { createGlobalStyle } from "styled-components";
// import '@fontsource/akaya-telivigala';
import '@fontsource/peace-sans';
// Supports weights 300-700
import '@fontsource-variable/space-grotesk';





const GlobalStyles = createGlobalStyle `

// *{
//     outline: 1px solid green !important;
// }

*,*::before,*::after{
    margin:0;
    padding:0;
}

body{
 font-family: 'Space Grotesk Variable', sans-serif;
overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}
a{
    color: inherit;
    text-decoration:none;
}
`

export default GlobalStyles;