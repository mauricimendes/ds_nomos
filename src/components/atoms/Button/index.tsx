import { Button as ButtonMaterial } from '@mui/material'
import { ArrowOutward } from '@mui/icons-material'
import { ButtonApp } from './styles'

export const Button = () => {
  return (
    <ButtonApp variant="contained" endIcon={<ArrowOutward />} disableElevation>
      <span>Detalhes</span>
    </ButtonApp>
  )
}