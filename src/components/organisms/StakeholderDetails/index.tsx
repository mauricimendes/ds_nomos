import React from 'react'
import { DetailsAvatar, IDetailsAvatar } from '../../molecules/DetailsAvatar'
import { DetailsInfo, IDetailsInfo } from '../../molecules/DetailsInfo'
import { Container } from './styles'

interface IStakeholderDetails extends IDetailsAvatar, IDetailsInfo { }

export const StackholderDetails: React.FC<IStakeholderDetails> = ({ imageUrl, role, name, party, subtitle }) => {
  return (
    <Container>
      <DetailsAvatar imageUrl={imageUrl} role={role} />
      <DetailsInfo name={name} party={party} subtitle={subtitle} />
    </Container>
  )
}