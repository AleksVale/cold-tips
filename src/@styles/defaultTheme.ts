import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#03074f', // Dark Blue
    },
    background: {
      default: '#000000', // Black
      paper: '#212121', // Dark Gray
    },
    text: {
      primary: '#FFFFFF', // White
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
