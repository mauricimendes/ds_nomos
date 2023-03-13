import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    font-family: ${props => props.theme.typography.family};
    font-weight: ${props => props.theme.typography.weight.medium};
    font-size: ${props => props.theme.typography.size.medium};
    line-height: ${props => props.theme.typography.height.medium};
    color: ${props => props.theme.tons.neutro.text};
    margin-right: 2px;
  }

  p {
    font-family: ${props => props.theme.typography.family};
    font-weight: ${props => props.theme.typography.weight.regular};
    font-size: ${props => props.theme.typography.size.medium};
    line-height: ${props => props.theme.typography.height.medium};
    color: ${props => props.theme.brand.color.secondary};
  }
`