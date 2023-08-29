import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import { Avatar, useTheme } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

export function Header() {
  const theme = useTheme()
  return (
    <Box component={'header'} sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          width: '100%',
          borderBottom: '1px double #fff',
          background: `linear-gradient(-45deg, ${theme.palette.primary.main} 10%, #000000 40%)`,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img src={logo} className={styles.containerImage} alt="logo" />
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="avatar"
            sx={{ mr: 2 }}
          >
            <Avatar>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
