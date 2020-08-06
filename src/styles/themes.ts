import Theme from "../models/theme.model";

export const defaultTheme: Theme = {
    bodyBackgroundColor: '#f3f4f6',
    contentBackgroundColor: '#fff',
    colorBlue: '#0065ff',
    colorBlueLight: '#f3f7ff',
    colorWhite: '#e0e0e0',
    colorBrown: '#616161',
    colorGray: '#6b6c6f',
    text: {
        primaryColor: '#768095',
        lightColor: '#a5abb7',
        darkColor: '#1e2c4c',
        black: 'rgba(0, 0, 0, 0.87)',
        purple: '#6200ee',
        red: '#fc4a40',
    },
    navbar: {
        width: {
            colappsed: '80px',
            expanded: '240px',
        },
    },
    topbar: {
        height: '70px',
    }

}