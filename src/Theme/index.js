import React from "react"
import { createTheme,  ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

let Theme = createTheme({
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    fontSize: 13,
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },

  palette: {
    type : 'dark',
    background: {
      default: "#191628",
      paper: "#191628",
    },
    text:{
      primary: "#dddddd"
    },
    primary: {
      main: '#5D5CCB', // Set your desired primary color here
    },
    secondary: {
      main: '#F1E7E6', // Set your desired primary color here
    },
  },

  components: {
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#F1E7E6',  // Change this to your desired hover color
          },
        },
        underlineHover: {
          "&:hover": {
            textDecorationColor: "red",
          },
        },
      },
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
