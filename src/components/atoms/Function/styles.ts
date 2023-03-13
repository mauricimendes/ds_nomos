import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  border: 1px solid ${props => props.theme.brand.color.primary};
  height: 16px;
  width: max-content;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: ${props => props.theme.typography.family};
    font-weight: ${props => props.theme.typography.weight.regular};
    font-size: ${props => props.theme.typography.size.small};
    line-height: ${props => props.theme.typography.height.small};
    color: ${props => props.theme.brand.color.primary};
  }
`