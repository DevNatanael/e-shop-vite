import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #F7F8F9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 40px;
`;
export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #f3a847;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: #f3a847;
    transform: scale(1.1);
  }
`;
