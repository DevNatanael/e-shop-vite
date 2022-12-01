import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./styles";

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Crie Sua Conta</Title>
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Email" />
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <Agreement>
            Aceito os ternos das <b>POLITICAS DE PRIVACIDADE</b>
          </Agreement>
          <Button>Criar</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
