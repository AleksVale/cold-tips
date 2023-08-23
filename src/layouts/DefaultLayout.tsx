import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Box } from '@mui/material'

export function DefaultLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}
