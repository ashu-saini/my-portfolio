import React from "react"
import { createTheme,  ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

const Theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },

  primary: {
    main: '#ff5722', // Set your desired primary color here
  },

  palette: {
    type : 'dark',
    background: {
      default: "#191628",
      paper: "#302e3d",
    },
    text:{
      primary: "#FFFFFF"
    }
  },
})

const Theme1 = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',
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
