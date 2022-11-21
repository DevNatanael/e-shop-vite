import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PT-BR</Language>
          <SearchContainer>
            <Input />
            <BiSearch />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MNG</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>ENTRAR</MenuItem>
          <MenuItem>
            <BsCart2 size={20} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
