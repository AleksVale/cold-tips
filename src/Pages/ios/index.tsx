/* eslint-disable react/no-unescaped-entities */
import { Avatar, Box, Grid, Typography } from '@mui/material'

export function InstallIos() {
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
          <Typography>Abra o aplicativo no Safari</Typography>
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
            Clique no icone de "compartilhamento" no canto inferior do
            smartphone
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
            Clique em "Adicionar á tela de inicio"
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
              4
            </Typography>
          </Avatar>
          <Typography display={'flex'}>
            Clique em "Adicionar" no canto superior direito
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
