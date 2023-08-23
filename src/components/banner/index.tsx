import { Box, Button, Typography } from '@mui/material'
import banner from '../../assets/landPic.webp'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { BiMedal } from 'react-icons/bi'
import { keyframes } from '@emotion/react'

export function Banner() {
  const effect = keyframes`
    0% {
      transform: scale(1);
    }    
    100%{
      transform: scale(1.2);
    }
  `

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box maxWidth={'600px'} margin={4}>
        <Link to={'/link'}>
          <img className={styles.banner} src={banner} alt="" />
        </Link>
        <Box
          bgcolor={'background.paper'}
          p={4}
          borderRadius={'12px'}
          marginTop={2}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'0.3rem'}
            marginBottom={2}
            color={'primary.main'}
          >
            <BiMedal size={24} />
            <Typography fontWeight={700}>ADQUIRIR PLANO PRO</Typography>
          </Box>
          <Typography gutterBottom variant="subtitle2" color={'text.disabled'}>
            Faça o upgrade agora para o nosso plano PRO e desbloqueie o acesso a
            os jogos com maior índice de assertividade.
          </Typography>
          <Button
            sx={{
              animation: `${effect} 2s infinite alternate`,
              my: 2,
            }}
            fullWidth={true}
            variant="contained"
            color="primary"
          >
            Adquirir Plano Pro
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
