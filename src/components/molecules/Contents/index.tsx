import React from 'react'
import { Content } from './styles'

interface IContents {
  children: JSX.Element[]
}

export const Contents: React.FC<IContents> = ({ children }) => {
  return (
    <Content>
      {children}
    </Content>
  )
}