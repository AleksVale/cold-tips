/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Grid, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export function InstallAndroid() {
  return (
    <Box component={'main'} padding={4} mt={10}>
      <Grid container spacing={4}>
        <Grid
          display={'flex'}
          alignItems={'center'}
          gap={1}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              width: '24x',
              height: '24px',
            }}
            variant="rounded"
          >
            <Typography fontSize={'0.9rem'} fontWeight={700}>
              1
            </Typography>
          </Avatar>
          <Typography display={'flex'}>
            Clique no icone de "Mais opções" no canto superior direito (
            <MoreVertIcon />)
          </Typography>
        </Grid>

        <Grid
          display={'flex'}
          alignItems={'center'}
          gap={1}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              width: '24x',
              height: '24px',
            }}
            variant="rounded"
          >
            <Typography fontSize={'0.9rem'} fontWeight={700}>
              2
            </Typography>
          </Avatar>
          <Typography display={'flex'}>
            Depois clique em "Instalar Aplicativo" ou "Adicionar a tela Inicial
          </Typography>
        </Grid>

        <Grid
          display={'flex'}
          alignItems={'center'}
          gap={1}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              width: '24x',
              height: '24px',
            }}
            variant="rounded"
          >
            <Typography fontSize={'0.9rem'} fontWeight={700}>
              3
            </Typography>
          </Avatar>
          <Typography display={'flex'}>
            Confirme a ação clicando em "Instalar" no popup que aparece na tela"
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
