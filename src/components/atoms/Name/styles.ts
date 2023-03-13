import styled from 'styled-components'

export const Headline = styled.h1`
  font-family: ${props => props.theme.typography.family};
  font-weight: ${props => props.theme.typography.weight.semi_bold};
  font-size: ${props => props.theme.typography.size.medium};
  line-height: ${props => props.theme.typography.height.large};

  color: ${props => props.theme.brand.color.secondary};
`