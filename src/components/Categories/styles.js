import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Container2 = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
export const Title = styled.h1`
  color: #f3a847;
`;
export const Button = styled.button`
  width: 30%;
  height: 15%;
  border: 1px solid #f3a847;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  background-color: #f3a847;
  color: black;
  font-weight: bold;
  transition-duration: 0.5s;

  &:hover {
    background-color: rgba(0,0,0,0.2);
    transform: scale(1.1);
    color:white;
  }
`;
