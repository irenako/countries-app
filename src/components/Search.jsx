import React from 'react'
import {IoSearch} from 'react-icons/io5'
import { InputContainer, Input } from './styled/Search.styled'

export default function Search({search, setSearch}) {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search}/>
    </InputContainer>
  )
}
