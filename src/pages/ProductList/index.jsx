import React from "react";
import {
  Container,
  Title,
  Filter,
  FilterContainer,
  FilterText,
  Select,
  Option
} from "./styles";
import { Navbar } from "../../components/NavBar";
import { Announcement } from "../../components/Announcement";
import { Products } from "../../components/Products";
import { NewsLetter } from "../../components/NewsLetter";
import { Footer } from "../../components/Footer";

export const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Produtos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Produtos:</FilterText>
          <Select>
            <Option disabled selected>Filtrar</Option>
            <Option>Celulares</Option>
            <Option>Eletrodomésticos</Option>
            <Option>VideoGames</Option>

          </Select>
        </Filter>
        <Filter>
          <FilterText>Classificar Produtos:</FilterText>
          <Select>
            <Option selected>Mais Novos</Option>
            <Option>Preço (Menor preço) </Option>
            <Option>Preço (Maior preço) </Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};
