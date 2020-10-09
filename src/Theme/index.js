import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

const Theme = createMuiTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
})

const ThemeContainer = (props) => {
  return <ThemeProvider theme={Theme}>{props.children}</ThemeProvider>
}

export default ThemeContainer
