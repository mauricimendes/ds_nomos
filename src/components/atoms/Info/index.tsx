import React from 'react'
import { Container } from './styles'

export interface IInfo {
  infoLabel: string
  info: string
}

export const Info: React.FC<IInfo> = ({ infoLabel, info }) => {
  return (
    <Container>
      <span>{infoLabel}:</span>
      <p>{info}</p>
    </Container>
  )
}