import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { FaCrown } from 'react-icons/fa'
import { PiHouseFill } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'

interface ButtonFooterProps {
  text: string
  icon: 'home' | 'menu' | 'bonus'
  redirect: string
}

const iconMapper = {
  home: <PiHouseFill size={20} />,
  menu: <GiHamburgerMenu size={20} />,
  bonus: <FaCrown size={20} />,
}

export function ButtonFooter({ text, icon, redirect }: ButtonFooterProps) {
  return (
    <Link className={styles.button} to={redirect}>
      {iconMapper[icon]}
      <Typography fontSize={10} fontWeight={800}>
        {text}
      </Typography>
    </Link>
  )
}
