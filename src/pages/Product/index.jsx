import React from "react";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
} from "./styles";
import { Navbar } from "../../components/NavBar";
import { Announcement } from "../../components/Announcement";
import { NewsLetter } from "../../components/NewsLetter";
import { Footer } from "../../components/Footer";

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_UL320_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Xbox Series X</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            deleniti totam animi labore? Modi, facilis. Saepe ullam magnam rem
            illum.
          </Desc>
          <Price>R$ 4200</Price>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
};
