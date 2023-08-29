import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Banner } from '../../components/banner'
import { PiGameControllerFill } from 'react-icons/pi'
import { CardGame } from '../../components/cardGame'
import fortuneTiger from '../../assets/tiger1.webp'
import mines from '../../assets/mines.webp'
import spaceman from '../../assets/spaceman.webp'
// import bacboblock from '../../assets/bacboblock.webp'
import aviator from '../../assets/aviator.webp'
// import futblock from '../../assets/futblock.webp'
// import mouse1block from '../../assets/mouse1block.webp'
// import oxblock from '../../assets/oxblock.webp'
// import rabbit1block from '../../assets/rabbit1block.webp'
// import roleta2block from '../../assets/roleta2block.webp'
import DownloadIcon from '@mui/icons-material/Download'
import AppleIcon from '@mui/icons-material/Apple'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface CardProps {
  img: string
  path: string
}

const cards: CardProps[] = [
  { img: aviator, path: '/aviator' },
  { img: mines, path: '/mines' },
  { img: spaceman, path: '/spaceman' },
  { img: fortuneTiger, path: '/' },
]
export function Home() {
  return (
    <Box component={'main'} paddingBottom={'5rem'}>
      <Banner />
      <Box display={'flex'} alignItems={'center'} gap={1} ml={2}>
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: 'primary.main',
            color: 'text.primary',
          }}
        >
          <PiGameControllerFill size={24} />
        </Avatar>
        <Typography fontWeight={500}>Jogos disponíveis</Typography>
      </Box>
      <Grid mt={2} pl={4} container spacing={2} maxWidth={'100%'}>
        {cards.map((card) => (
          <Grid key={card.img} item xs={12} sm={6} md={4} lg={4}>
            <CardGame imgPath={card.img} path={card.path} />
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        mt={10}
        spacing={4}
        maxWidth={'600px'}
        ml={'auto'}
        mr={'auto'}
      >
        <Grid
          item
          lg={12}
          display={'flex'}
          alignItems={'center'}
          gap={'0.4rem'}
        >
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: 'primary.main',
              width: '36px',
              height: '36px',
            }}
          >
            <DownloadIcon color="info" fontSize="medium" />
          </Avatar>
          <Typography fontWeight={500}>Instalação do App</Typography>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Link className={styles.cardInstall} to={'/ios'}>
            <AppleIcon />
            <Typography fontWeight={700}>iOS</Typography>
          </Link>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Link className={styles.cardInstall} to={'/android'}>
            <AdbIcon />
            <Typography fontWeight={700}>Android</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
