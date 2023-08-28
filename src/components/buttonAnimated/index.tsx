import { Button, keyframes } from '@mui/material'
interface ButtonProps {
  text: string
  onClick?: () => void
}
export function ButtonAnimated({ text, onClick }: ButtonProps) {
  const effect = keyframes`
  0% {
    transform: scale(1);
  }    
  100%{
    transform: scale(1.2);
  }
`
  return (
    <Button
      sx={{
        animation: `${effect} 2s infinite alternate`,
        my: 2,
      }}
      fullWidth={true}
      variant="contained"
      color="primary"
      onClick={() => {
        onClick?.()
      }}
    >
      {text}
    </Button>
  )
}
