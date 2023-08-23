import { Avatar, Box } from '@mui/material'
import { Banner } from '../../components/banner'
import { PiGameControllerFill } from 'react-icons/pi'

export function Home() {
  return (
    <Box component={'main'} paddingBottom={'5rem'}>
      <Banner />
      <Avatar
        variant="rounded"
        sx={{
          bgcolor: 'primary.main',
          ml: 2,
          color: 'text.primary',
        }}
      >
        <PiGameControllerFill size={24} />
      </Avatar>
    </Box>
  )
}
