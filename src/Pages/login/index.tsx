import { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { LoginService } from '../../services/login.service'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { token, login } = useAuth()
  console.log(token)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    const data = {
      email,
      password,
    }
    login('aleksaleks')
    navigate('/')
    console.log('Login clicked')
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: 'grey.900',
        borderRadius: '6px',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AccountCircle sx={{ fontSize: 48 }} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            color="primary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Logar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
