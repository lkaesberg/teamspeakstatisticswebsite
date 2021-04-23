import {createMuiTheme, ThemeOptions} from "@material-ui/core";

const blackDarkGrey = '#18191A'
const dakGray = "#242526"
const grey = "#3a3b3c"
const bonewhite = "#e4e6eb"
const litGray = "#b0b3b8"

const customTheme: ThemeOptions = {
    typography: {fontFamily: 'Quicksand'},

    palette: {
        primary: {
            main: blackDarkGrey,
            contrastText: bonewhite
        },
        secondary: {
            main: dakGray,
            contrastText: litGray
        }
    }
}

export const theme = createMuiTheme(customTheme)