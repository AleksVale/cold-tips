import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

export function Menu() {
  return (
    <Box pt={6} display={'flex'} justifyContent={'center'}>
      <Box display={'flex'} flexDirection={'column'} gap={1}>
        <Link className={styles.router} to={'aulas'}>
          <Typography fontWeight={700}>Aulas completas</Typography>
        </Link>
        <Link className={styles.router} to={'aulas'}>
          <Typography fontWeight={700}>Comunidade de alunos</Typography>
        </Link>
        <Link className={styles.router} to={'aulas'}>
          <Typography fontWeight={700}>instagram</Typography>
        </Link>
        <Link className={styles.router} to={'aulas'}>
          <Typography fontWeight={700}>whatsapp</Typography>
        </Link>
      </Box>
    </Box>
  )
}
