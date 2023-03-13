import React from 'react'
import { Info } from '../../atoms/Info'
import { Name } from '../../atoms/Name'
import { Subtitle } from '../../atoms/Subtitle'
import { Container } from './styles'

export interface IDetailsInfo {
  name: string
  party: string
  subtitle: string
}

export const DetailsInfo: React.FC<IDetailsInfo> = ({ name, party, subtitle }) => {
  return (
    <Container>
      <Name>
        {name}
      </Name>
      <Info infoLabel='Partido' info={party} />
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}