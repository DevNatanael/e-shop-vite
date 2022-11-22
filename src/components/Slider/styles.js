import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow:hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transition: all 1.0s ease;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  background-color: #${props=>props.bg}

`;
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  justify-content: center;
`;

export const Image = styled.img`
  height: 20%;
  margin-left:4%;
  margin-top:2%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding:50px;
  margin-top:15%;
`;

export const Title = styled.h1`
    font-size: 35px;
`
export const Desc = styled.p`
    margin: 30px 0px;
    font-size:15px;
    font-weight:500;
    letter-spacing:3px;
`
export const Button = styled.button`
    padding:10px;
    font-size: 20px;
    background-color:#F3A847;
    cursor: pointer;
    border:1px solid #F3A847;
    border-radius:10px;
`
