import React from 'react'
import { Paragraph } from './styles'

interface ISubtitle {
  children: string
}

export const Subtitle: React.FC<ISubtitle> = ({ children }) => {
  return (
    <Paragraph>
      {children}
    </Paragraph>
  )
}