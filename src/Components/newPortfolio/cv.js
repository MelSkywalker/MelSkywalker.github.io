import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
  position: absolute;
  z-index: 100;
  right: 3%;
  top: 2%;
  width: 12%;
  height: 7%;
  background-color: #c23cc6;
  background-image: linear-gradient(#f1ed7b, #f5e342);

  /* background-image: linear-gradient(#fcdf38, #f5e342); */
  border-radius: 25px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
  cursor: pointer;

  &:after {
    border-radius: 30px;
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    width: calc(100% - 4px);
    height: 30%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }

  &:hover {
    /* background-image: linear-gradient(#f6ff00, #fcdf38); */
    background-image: linear-gradient(#fcdf38, #f5e342);

  }
`;

const Cv = () => {
    return(
        <a href="https://www.dropbox.com/s/sdcefdfp1x62cew/melisa%20quesada%20cv%20frontend.pdf?dl=0" target="_blank" rel ="noopener noreferrer">
        <Button>Read my resume!</Button>
        </a>
    );
};

export default Cv;

/* @include btn-variant(#1e88e5, #64b5f6, #42a5f5, #bbdefb, #e3f2fd, #90caf9, #1976d2); */

