import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 100%;
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
        <a href="https://drive.google.com/file/d/1XltLHcSYtxnMb6J3mXRDAL-h5AdNyIaZ/view?usp=sharing" target="_blank" rel ="noopener noreferrer">
        <Button>Download my resume!</Button>
        </a>
    );
};

export default Cv;
