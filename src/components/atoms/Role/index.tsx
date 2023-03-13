import React from 'react'
import { Paragraph } from './styles'

interface IRole {
  children: string
}

export const Role: React.FC<IRole> = ({ children }) => {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  )
}