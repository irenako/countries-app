import React from 'react'
import { Wrapper } from './styled/Main.styled'
import { Container } from './styled/Container.styled'

export default function Main({children}) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
