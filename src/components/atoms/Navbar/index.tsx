import React from 'react'
import { Container } from './styles'
import logo from '../../../assets/logo.png'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <img src={logo} />
    </Container>
  )
}