import { Box } from '@mui/material'

export function IframeGnome() {
  return (
    <Box p={6} width={{ xs: '100%', lg: '80%' }}>
      <iframe
        src="https://gnobet.com/?ref=BGXLTHYD1Y"
        title="Gnobet Website"
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </Box>
  )
}
