import React from 'react';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./themes";

const MyThemeProvider: React.FC = ({children}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            {children}
        </ThemeProvider>
    );
};

export default MyThemeProvider;