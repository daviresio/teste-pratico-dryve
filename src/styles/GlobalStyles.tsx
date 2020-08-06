import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import {ThemeInnerModel} from "../models/theme.model";

const GlobalStyles = createGlobalStyle`
${reset};

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: ${({theme}: ThemeInnerModel) => theme.bodyBackgroundColor};
    overflow-x: hidden;
}

i {
    font-size: inherit;
}

button {
 display: inline-block;
 border: none;
 margin: 0;
 padding: 0;
 text-decoration: none;
 outline: none;
 font-family: inherit;
}


ul, li {
user-select: none;
}

input {
    font-family: inherit;
    outline: none;
}
`


export default GlobalStyles
