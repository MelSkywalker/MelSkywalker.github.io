import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 40%;
  background-color: #c23cc6;
  background-image: linear-gradient(#f1ed7b, #f5e342);

  /* background-image: linear-gradient(#fcdf38, #f5e342); */
  border-radius: 25px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
  cursor: pointer;

`;

const Cv = () => {
    return(
        <a href="https://drive.google.com/file/d/1XltLHcSYtxnMb6J3mXRDAL-h5AdNyIaZ/view?usp=sharing" target="_blank">
        <Button>Download my resume!</Button>
        </a>
    );
};

export default Cv;

/* @include btn-variant(#1e88e5, #64b5f6, #42a5f5, #bbdefb, #e3f2fd, #90caf9, #1976d2); */

