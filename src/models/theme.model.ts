export default interface Theme {
    bodyBackgroundColor: string
    contentBackgroundColor: string
    colorBlue: string
    colorBlueLight: string
    colorWhite: string
    colorBrown: string
    colorGray: string
    text: Text
    navbar: Navbar
    topbar: Topbar
}


export interface ThemeInnerModel {
    theme: Theme
}

interface Navbar {
    width: {
        colappsed: string
        expanded: string
    }
}

interface Topbar {
    height: string
}

interface Text {
    primaryColor: string
    lightColor: string
    darkColor: string
    black: string
    purple: string
    red: string
}
