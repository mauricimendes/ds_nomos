import React from 'react'
import { Container } from './styles'

interface IFunction {
  children: string
}

export const Function: React.FC<IFunction> = ({ children }) => {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  )
}