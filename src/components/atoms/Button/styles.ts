import styled from 'styled-components'
import { Button as ButtonMaterial } from '@mui/material'

export const ButtonApp = styled(ButtonMaterial)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.theme.brand.color.primary} !important;

  span {
    text-transform: none;
    font-family: ${props => props.theme.typography.family};
    font-weight: ${props => props.theme.typography.weight.bold};
    font-size: ${props => props.theme.typography.size.small};
  }
`