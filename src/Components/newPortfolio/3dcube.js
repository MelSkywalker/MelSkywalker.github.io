import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 400px;
    margin: 200px auto;
    perspective: 800px;
`;
const Rotate = keyframes`
    0%{
            transform: rotateY(0deg);
        }
        100%{
            transform: rotateY(360deg);
        }
`;

const Box = styled.div`
    width: 40px;
    transform-style: preserve-3d;
    color: orange;
    font: 80px impact;
    text-align: center;
    animation: ${Rotate} 15s linear infinite;
`;

const Front = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform: translateZ(200px);
`;
const Back = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform: rotateY(180deg) translateZ(200px);
`;
const Left = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform-origin:left;
    transform: rotateY(-90deg) translateX(-200px);
`;
const Right = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform-origin:right;
    transform: rotateY(90deg) translateX(200px);
`;
const Top = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform-origin:top;
    transform: rotateX(-90deg) translateY(-200px);
`;
const Bottom = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    opacity: .8;
    background-color: #1f122c;
    transform-origin:bottom;
    transform: rotateX(90deg) translateY(200px);
`;

const Cube = () => {
  return (
    <Container>
      <Box>
        <Front className='front'><br/>FRONT</Front>
        <Back className='back'><br/>BACK</Back>
        <Left className='left'><br/>LEFT</Left>
        <Right className='right'><br/>RIGHT</Right>
        <Top className='top'><br/>TOP</Top>
        <Bottom className='bottom'><br/>BOTTOM</Bottom>
      </Box>
    </Container>
  );
};

export default Cube;
