import React from 'react'
import { Headline } from './styles'

interface IName {
  children: string
}

export const Name: React.FC<IName> = ({ children }) => {
  return (
    <Headline>
      {children}
    </Headline>
  )
}