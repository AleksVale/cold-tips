import { Box } from '@mui/material'
import { ButtonFooter } from '../buttonFooter'

export function Footer() {
  return (
    <Box
      position={'fixed'}
      minWidth={'100%'}
      bottom={0}
      padding={1}
      paddingX={{ xs: 4, sm: 20, md: 20 }}
      bgcolor={'background.paper'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <ButtonFooter text="BÔNUS" icon="bonus" redirect="/bonus" />
      <ButtonFooter text="HOME" icon="home" redirect="/home" />
      <ButtonFooter text="MENU" icon="menu" redirect="/menu" />
    </Box>
  )
}
