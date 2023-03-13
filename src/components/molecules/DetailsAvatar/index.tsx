import React from 'react'
import { Avatar } from '../../atoms/Avatar'
import { Role } from '../../atoms/Role'
import { Container } from './styles'

export interface IDetailsAvatar {
  imageUrl: string
  role: string
}

export const DetailsAvatar: React.FC<IDetailsAvatar> = ({ imageUrl, role }) => {
  return (
    <Container>
      <Avatar imageUrl={imageUrl} size='large' />
      <Role>
        {role}
      </Role>
    </Container>
  )
}