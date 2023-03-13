import React from 'react'
import { Container } from './styles'

interface IFilters {
  children: JSX.Element | JSX.Element[]
}

export const Filters: React.FC<IFilters> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}