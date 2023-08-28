import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function CardGame({ imgPath, path }: { imgPath: string; path: string }) {
  return (
    <Box>
      <Link to={path} className={styles.linkCard}>
        <img src={imgPath} alt="Banner for the game" />
      </Link>
    </Box>
  )
}
