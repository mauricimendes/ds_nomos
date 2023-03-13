import styled from 'styled-components'

interface IImage {
  size: 'regular' | 'large'
}

export const Image = styled.img<IImage>`
  height: ${props => props.size === 'large' ? '130px' : '56px'};
  width: ${props => props.size === 'large' ? '130px' : '56px'};
  border: 1px solid ${props => props.theme.brand.color.primary};
  border-radius: 50%;
`