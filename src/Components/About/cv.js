import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 80%;
  height: 20%;
  background-color: #c23cc6;
  background-image: linear-gradient(#f1ed7b, #f5e342);

  border-radius: 25px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
  cursor: pointer;

  border-bottom: #f5e342 ridge 7px;
  border-left: #f5e342 groove 7px;
  text-align: center;
  box-sizing: border-box;
`;

const Cv = () => {
    return(
        <a href="https://www.dropbox.com/s/sdcefdfp1x62cew/melisa%20quesada%20cv%20frontend.pdf?dl=0" target="_blank" rel ="noopener noreferrer">
        <Button>Download my resume!</Button>
        </a>
    );
};

export default Cv;
