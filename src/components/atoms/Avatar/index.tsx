import React from 'react'
import { Image } from './styles'

interface IAvatar {
  size?: 'regular' | 'large'
  imageUrl: string
}

export const Avatar: React.FC<IAvatar> = ({ imageUrl, size = 'regular' }) => {
  return (
    <Image size={size} src={imageUrl} alt='Avatar' />
  )
}