import styled from 'styled-components'

export const Headline = styled.h1`
  font-family: ${props => props.theme.typography.family};
  font-size: ${props => props.theme.typography.size.extra_large};
  font-weight: ${props => props.theme.typography.weight.bold};
  line-height: ${props => props.theme.typography.height.extra_large};
  letter-spacing: 0;
  color: ${props => props.theme.brand.color.primary};
`