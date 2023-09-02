import { Box, Button, Grid, Typography } from '@mui/material'
import { IframeGnome } from '../../components/iframe'

export function Double() {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        maxWidth={'700px'}
        bgcolor={' rgba(255, 255, 255, 0.11)'}
        mt={8}
        p={2}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignContent={'center'}
        borderRadius={'6px'}
        width={'100%'}
      >
        <Grid container borderBottom={'1px double #fff'} pb={2}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            width={'100%'}
            textAlign={'center'}
            p={2}
            borderRadius={'6px'}
            bgcolor={'rgba(255,255,255,.05)'}
            mb={2}
          >
            <Typography
              fontWeight={700}
              fontSize={'0.6rem'}
              color={'text.disabled'}
            >
              ULTIMO SINAL
            </Typography>
            <Typography fontWeight={700}>AGUARDANDO ENTRADA...</Typography>
          </Grid>
          <Grid item textAlign={'center'} lg={4} md={4}>
            <Box
              borderRadius={'6px'}
              bgcolor={'rgba(255,255,255,.05)'}
              p={3}
              mx={1}
            >
              <Typography
                color={'text.disabled'}
                fontWeight={700}
                fontSize={'0.6rem'}
                pb={2}
              >
                PROTEÇÕES
              </Typography>
              <Typography
                lineHeight={0}
                fontSize={'1.2rem'}
                fontWeight={700}
                color={'primary.main'}
              >
                --
              </Typography>
            </Box>
          </Grid>
          <Grid item textAlign={'center'} lg={4} md={4}>
            <Box
              borderRadius={'6px'}
              bgcolor={'rgba(255,255,255,.05)'}
              p={3}
              mx={1}
            >
              <Typography
                color={'text.disabled'}
                fontWeight={700}
                fontSize={'0.6rem'}
                pb={2}
              >
                Saída
              </Typography>
              <Typography
                lineHeight={0}
                fontSize={'1.2rem'}
                fontWeight={700}
                color={'primary.main'}
              >
                {'--'}
              </Typography>
            </Box>
          </Grid>
          <Grid item textAlign={'center'} lg={4} md={4}>
            <Box
              borderRadius={'6px'}
              bgcolor={'rgba(255,255,255,.05)'}
              p={3}
              mx={1}
            >
              <Typography
                color={'text.disabled'}
                fontWeight={700}
                fontSize={'0.6rem'}
                pb={2}
              >
                VALIDO ATÉ
              </Typography>
              <Typography
                lineHeight={0}
                fontSize={'1.2rem'}
                fontWeight={700}
                color={'primary.main'}
              >
                {'--'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth={'700px'} mt={2} width={'100%'} display={'flex'} gap={2}>
        <Button fullWidth variant="contained" size="large">
          <Typography p={2} fontWeight={700} fontSize={'0.8rem'}>
            Identificar sinal
          </Typography>
        </Button>
        <Button fullWidth variant="contained" size="large" color="secondary">
          <Typography fontSize={'0.6rem'}>
            Clique no botão a esquerda para inteligencia trabalhar!
          </Typography>
        </Button>
      </Box>
      <IframeGnome />
    </Box>
  )
}
