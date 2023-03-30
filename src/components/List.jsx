import React from 'react'
import { WrapperList } from './styled/List.styled'

export default function List({children}) {
  return (
    <WrapperList>
      {children}
    </WrapperList>
  )
}
