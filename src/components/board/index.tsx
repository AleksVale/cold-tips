import React from 'react'

import { Grid } from '@mui/material'

export interface Cell {
  index: number
  imageSrc: string
}
interface BoardProps {
  cells: Cell[]
}

const BoardCell: React.FC<{ src: string }> = ({ src }) => (
  <Grid item xs={3} lg={3} xl={3}>
    <img width={'90%'} src={src} alt="Cell" />
  </Grid>
)

export const Board: React.FC<BoardProps> = ({ cells }: BoardProps) => {
  return (
    <Grid maxWidth={'300px'} alignSelf={'center'} container columns={15}>
      {cells.map((cell) => (
        <BoardCell key={cell.index} src={cell.imageSrc} />
      ))}
    </Grid>
  )
}
