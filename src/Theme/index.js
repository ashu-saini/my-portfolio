import React from "react"
import { createTheme,  ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

let Theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },

  palette: {
    type : 'dark',
    background: {
      default: "#191628",
      paper: "#211D34",
    },
    text:{
      primary: "#F1E7E6"
    },
    primary: {
      main: '#5D5CCB', // Set your desired primary color here
    },
  },
})

Theme = responsiveFontSizes(Theme);

const Theme1 = createTheme({
  typography: {
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },

  palette: {
    type : 'light',
    background: {
      default: "#fff"
    }
  }
})

const ThemeContainer = (props) => {
  return <ThemeProvider theme={Theme}>
    <CssBaseline/>
    {props.children}
    </ThemeProvider>
}

export default ThemeContainer
