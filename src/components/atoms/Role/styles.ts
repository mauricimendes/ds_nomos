import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: ${props => props.theme.typography.family};
  font-weight: ${props => props.theme.typography.weight.regular};
  font-size: ${props => props.theme.typography.size.medium};
  line-height: ${props => props.theme.typography.height.medium};
  color: ${props => props.theme.brand.color.primary};
`