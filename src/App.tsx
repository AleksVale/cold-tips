import { BrowserRouter } from 'react-router-dom'
import theme from './@styles/defaultTheme'
import { Router } from './components/Router'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './context/AuthContext'
const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
      body: {
        fontSize: 'Roboto, sans-serif',
        backgroundColor: '#061113',
        color: '#fff',
      },
    }}
  />
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          {inputGlobalStyles}
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
