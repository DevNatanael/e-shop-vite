import React from "react";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button
} from "./styles";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Slider = () => {

    function handleClick(direction){

    }

  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick("left")}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide bg="ffff">
          <ImgContainer>
            <Image src="https://www.servitron.com.br/wp-content/uploads/2018/10/eletronicos.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>PROMOÇÃO DE FIM DE ANO</Title>
            <Desc>CORRA AGORA PARA COMPRAR NOSSOS PRODUTOS.</Desc>
            <Button>COMPRE AGORA</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://www.servitron.com.br/wp-content/uploads/2018/10/eletronicos.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>PROMOÇÃO DE FIM DE ANO</Title>
            <Desc>CORRA AGORA PARA COMPRAR NOSSOS PRODUTOS.</Desc>
            <Button>COMPRE AGORA</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick("right")}>
        <AiOutlineArrowRight />
      </Arrow>
    </Container>
  );
};
