import styled from 'styled-components'

export const Container = styled.div`
  height: 36px;
  padding-right: ${props => props.theme.space.medium};
  padding-left: ${props => props.theme.space.medium};
  border: 1px solid ${props => props.theme.tons.neutro.text};
  border-radius: 4px;
  width: min-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.tons.neutro.bg.secondary};

  svg {
    margin: 0;
    color: ${props => props.theme.tons.neutro.text};
  }

  input, input::placeholder {
    outline: none;
    border: 0;
    width: min-content;

    font-family: ${props => props.theme.typography.family};
    font-weight: ${props => props.theme.typography.weight.regular};
    font-size: ${props => props.theme.typography.size.medium};
    height: ${props => props.theme.typography.height.medium};
  }
`