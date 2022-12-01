import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 60%;
`;

export const InfoContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-top: 4%;

`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius:10px;
  border: 1px solid #f3a847;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  padding: 15px;
  border: 1px solid #f3a847;
  background-color:#f3a847;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: #f3a847;
    transform: scale(1.1);
  }
`;
