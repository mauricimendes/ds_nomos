import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: ${props => props.theme.typography.family};
  font-size: ${props => props.theme.typography.size.medium};
  font-weight: ${props => props.theme.typography.weight.semi_bold};
  line-height: ${props => props.theme.typography.height.large};
  letter-spacing: 0;
  color: ${props => props.theme.tons.neutro.text};
`