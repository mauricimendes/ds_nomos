import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 29px;
  height: 88px;
  width: auto;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.theme.tons.neutro.bg.secondary};
  border-radius: 8px;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 29px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`