import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

interface IProps {
  children: JSX.Element[]
}

export const Theme: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}