import React from "react";
import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment
} from "./styles";
import { FaFacebookSquare, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MNG</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          impedit in? Quia obcaecati esse, beatae quasi reprehenderit asperiores
          fugit natus quae temporibus dolorem.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaFacebookSquare size={22} />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <AiFillInstagram size={22} />
          </SocialIcon>

          <SocialIcon color="161B22">
            <AiFillGithub size={22} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Eletrodomésticos</ListItem>
          <ListItem>VideoGames</ListItem>
          <ListItem>Smarthphones</ListItem>
          <ListItem>Minha conta</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <FaMapMarkerAlt style={{marginRight:'10px'}} />
          Rua X, Número 21, Aldeota
        </ContactItem>

        <ContactItem>
          <BsTelephoneFill style={{marginRight:'10px'}}/>
          +55 85 99999-8888
        </ContactItem>

        <ContactItem>
          <AiOutlineMail style={{marginRight:'10px'}} />
          contato@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};
