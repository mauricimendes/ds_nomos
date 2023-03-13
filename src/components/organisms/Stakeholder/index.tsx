import React from 'react'
import { Avatar } from '../../atoms/Avatar'
import { Button } from '../../atoms/Button'
import { Function } from '../../atoms/Function'
import { Info } from '../../atoms/Info'
import { Name } from '../../atoms/Name'
import { Role } from '../../atoms/Role'
import { Content } from '../../molecules/Contents/styles'
import { Container } from './styles'

interface IStakeholderInfo {
  avatarUrl: string
  name: string
  functionTitle: string
  party: string
  uf: string
  role: string
}

export const StakeholderInfo: React.FC<IStakeholderInfo> = ({ avatarUrl, name, functionTitle, party, uf, role }) => {
  return (
    <Container>
      <div>
        <Avatar imageUrl={avatarUrl} />
        <section>
          <Content>
            <Name>
              {name}
            </Name>
            <Function>
              {functionTitle}
            </Function>
          </Content>
          <Content>
            <Info infoLabel='Partido' info={party} />
            <Info infoLabel='UF' info={uf} />
            <Role>
              {role}
            </Role>
          </Content>
        </section>
      </div>
      <Button />
    </Container>
  )
}