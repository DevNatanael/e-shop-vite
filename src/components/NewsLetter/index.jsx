import React from 'react'
import {Container,Title,Desc,InputContainer,Input,Button} from './styles'
import { BiSend } from "react-icons/bi";

export const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Atualizações diárias sobre seus produtos favoritos</Desc>
        <InputContainer>
          <Input placeholder="Seu email" />
          <Button>
            <BiSend size={25} />
          </Button>
        </InputContainer>
    </Container>
  )
}
