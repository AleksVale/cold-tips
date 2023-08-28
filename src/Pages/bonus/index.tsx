import { Box } from '@mui/material'
import { ButtonAnimated } from '../../components/buttonAnimated'
import banner2 from '../../assets/banner2.png'

export function BonusPage() {
  return (
    <Box component={'main'} display={'flex'} mt={8} justifyContent={'center'}>
      <Box maxWidth={'600px'}>
        <img width={'100%'} src={banner2} alt="" />
        <Box
          bgcolor={'background.paper'}
          p={2}
          borderRadius={'12px'}
          marginTop={2}
        >
          <ButtonAnimated text="CLIQUE AQUI PARA SE REGISTRAR" />
        </Box>
      </Box>
    </Box>
  )
}
