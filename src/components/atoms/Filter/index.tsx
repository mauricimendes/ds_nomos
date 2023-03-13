import React, { useCallback, InputHTMLAttributes } from 'react'
import { Search } from '@mui/icons-material'
import { Container } from './styles'

interface IFilter extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const Filter: React.FC<IFilter> = ({ name, ...rest }) => {
  const focusInput = useCallback(() => {
    document.getElementById(name)?.focus()
  }, [])

  return (
    <Container onClick={focusInput}>
      <input {...rest} id={name} />
      <Search />
    </Container>
  )
}