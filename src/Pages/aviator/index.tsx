import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { IframeGnome } from '../../components/iframe'

export function Aviator() {
  const [countdown, setCountdown] = useState(120)
  const [signalText, setSignalText] = useState('')
  const [signalText2, setSignalText2] = useState('')
  const [signalTime, setSignalTime] = useState('')
  const [hasGenerated, setHasGenerated] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const textos = ['até 2', 'até 3']
  const textos2 = ['1,5', '2.0', '1,5', '1,4']
  const [peopleCount, setPeopleCount] = useState(getRandomNumber())

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount(getRandomNumber())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1)
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [countdown])

  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 30 // Gera um número entre 100 e 999
  }

  const iniciarContagem = () => {
    if (isGenerating) return
    setIsGenerating(true)
    let tempo = Math.floor(Math.random() * 5 + 1) * 2
    const interval = setInterval(() => {
      if (tempo <= 0) {
        const indice = Math.floor(Math.random() * textos.length)
        const texto = textos[indice]
        const indice2 = Math.floor(Math.random() * textos2.length)
        const texto2 = textos2[indice2]
        const agora = new Date()
        const hora = agora.getHours()
        let minutos = agora.getMinutes() + 1
        if (minutos >= 60) {
          minutos = 0
        }
        const horaFormatada = `${hora}h${minutos.toString().padStart(2, '0')}`
        setSignalTime(horaFormatada)
        setSignalText(texto)
        setSignalText2(texto2)
        setHasGenerated(true)
        clearInterval(interval)
        setIsGenerating(false)
      }

      setCountdown(tempo)
      tempo -= 1
    }, 1000)
  }
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
            <Typography fontWeight={700}>
              {countdown > 0
                ? `PROXIMO SINAL EM: ${countdown}`
                : hasGenerated
                ? 'SINAL IDENTIFICADO'
                : 'AGUARDANDO ENTRADA...'}
            </Typography>
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
                {signalText || '--'}
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
                {signalText2 || '--'}
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
                {signalTime || '--'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          pt={2}
          fontWeight={500}
          fontSize={'0.825rem'}
          textAlign={'center'}
        >
          {peopleCount} PESSOAS JOGANDO AGORA.
        </Typography>
      </Box>
      <Box maxWidth={'700px'} mt={2} width={'100%'} display={'flex'} gap={2}>
        <Button
          onClick={iniciarContagem}
          fullWidth
          variant="contained"
          size="large"
        >
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
