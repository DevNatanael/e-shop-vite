import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  width: 100%;
  background-color: #131921;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color:white;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color:white;
`;

export const Input = styled.input`
  border: none;
  background-color: white;

  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
`;

export const Center = styled.div`
  flex: 1;
  text-align:center;
`;

export const Logo = styled.h1`
    font-weight:bold;
    color:white;
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
    font-size:15px;
    cursor:pointer;
    margin-left: 27px;
    color:white;
`
