import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3bfb82', // Dark Blue
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#091b1e ',
      paper: '#113137', 
    },
    text: {
      primary: '#fcfcfc ', // White
      secondary: '#B0BEC5', // Light Gray
      disabled: '#8b8484',
    },
    grey: {
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
})

export default theme
