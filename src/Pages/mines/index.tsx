import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Board, Cell } from '../../components/board'
import empty from '../../assets/empty.webp'
import updated from '../../assets/updated.webp'
import { IframeGnome } from '../../components/iframe'

export function Mines() {
  const [peopleCount, setPeopleCount] = useState(getRandomNumber())
  const [countdown, setCountdown] = useState('Identificar sinal')
  const [validUntil, setValidUntil] = useState<string>('--')

  const countdownMinutes = 0
  const countdownSeconds = 7

  const boardSize = 5
  const numImages = 5

  useEffect(() => {
    const now = new Date()
    const validUntilTime = new Date(now.getTime() + 2 * 60 * 1000)

    const formatter = new Intl.DateTimeFormat('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'America/Sao_Paulo', // Defina o fuso horário correto
    })
    const validUntilString = formatter.format(validUntilTime)

    setValidUntil(validUntilString)
  }, [])
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
  }
  const [cells, setCells] = useState<Cell[]>([])

  useEffect(() => {
    const newCells = Array.from(
      { length: boardSize * boardSize },
      (_, index) => ({
        index,
        imageSrc: empty,
      }),
    )
    setCells(newCells)
  }, [])

  function updateImages() {
    const updatedIndexes = new Set<number>()
    while (updatedIndexes.size < numImages) {
      const index = getRandomInt(boardSize * boardSize)
      updatedIndexes.add(index)
    }
    const newCells = cells.map((cell, index) =>
      updatedIndexes.has(index) ? { index, imageSrc: updated } : cell,
    )
    setCells(newCells)
  }

  function startCountdown() {
    let minutos = countdownMinutes
    let segundos = countdownSeconds

    const countdownInterval = setInterval(() => {
      segundos--

      if (segundos < 0) {
        minutos--
        segundos = 59
      }

      const minutosFormatados = minutos < 10 ? '0' + minutos : minutos
      const segundosFormatados = segundos < 10 ? '0' + segundos : segundos

      setCountdown(`${minutosFormatados}:${segundosFormatados}`)

      if (minutos === 0 && segundos === 0) {
        clearInterval(countdownInterval)
        resetGame()
        setCountdown('Identificar sinal')
      }
    }, 1000)
  }

  // Reset the game by setting all cells to empty
  function resetGame() {
    const newCells = cells.map((value) => {
      return { index: value.index, imageSrc: empty }
    })
    setCells(newCells)
  }
  const handleSubmitAction = () => {
    if (countdown !== 'Identificar sinal') return
    startCountdown()
    resetGame()
    updateImages()
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount(getRandomNumber())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 30 // Gera um número entre 100 e 999
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
        bgcolor={'background.default'}
        mt={8}
        p={2}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignContent={'center'}
        borderRadius={'6px'}
        width={'100%'}
      >
        <Board cells={cells} />
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
            bgcolor={'background.paper'}
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
            <Box borderRadius={'6px'} bgcolor={'background.paper'} p={3} mx={1}>
              <Typography
                color={'text.disabled'}
                fontWeight={700}
                fontSize={'0.6rem'}
                pb={2}
              >
                MINAS NO JOGO
              </Typography>
              <Typography
                lineHeight={0}
                fontSize={'1.2rem'}
                fontWeight={700}
                color={'primary.main'}
              >
                03
              </Typography>
            </Box>
          </Grid>
          <Grid item textAlign={'center'} lg={4} md={4}>
            <Box borderRadius={'6px'} bgcolor={'background.paper'} p={3} mx={1}>
              <Typography
                color={'text.disabled'}
                fontWeight={700}
                fontSize={'0.6rem'}
                pb={2}
              >
                N° DE TENTATIVAS
              </Typography>
              <Typography
                lineHeight={0}
                fontSize={'1.2rem'}
                fontWeight={700}
                color={'primary.main'}
              >
                03
              </Typography>
            </Box>
          </Grid>
          <Grid item textAlign={'center'} lg={4} md={4}>
            <Box borderRadius={'6px'} bgcolor={'background.paper'} p={3} mx={1}>
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
                {validUntil}
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
          onClick={handleSubmitAction}
          fullWidth
          variant="contained"
          size="large"
        >
          <Typography p={2} fontWeight={700} fontSize={'0.8rem'}>
            {countdown}
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
