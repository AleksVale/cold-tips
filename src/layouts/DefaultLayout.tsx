import { Navigate, Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Box } from '@mui/material'
import { useAuth } from '../context/AuthContext'

export function DefaultLayout() {
  const { token } = useAuth()
  console.log(token)
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Header />
      {token ? <Outlet /> : <Navigate to="/login" />}
      <Footer />
    </Box>
  )
}
