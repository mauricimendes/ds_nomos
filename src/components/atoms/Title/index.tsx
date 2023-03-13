import React from "react"
import { Headline } from "./styles"

interface ITitle {
  children: string
}

export const Title: React.FC<ITitle> = ({ children }) => {
  return (
    <Headline>
      {children}
    </Headline>
  )
}