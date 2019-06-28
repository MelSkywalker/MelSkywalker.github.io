import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

// const Button = styled.button`
//     width: 15%;
//     height: 7%;
//     z-index: 100;
//     /* transform: rotate(15deg); */
//     left: 5%;
//     top: 5%;

//     position: absolute;
//     -moz-box-shadow: 0px 1px 0px 0px #f0f7fa;
// 	-webkit-box-shadow: 0px 1px 0px 0px #f0f7fa;
// 	box-shadow: 0px 1px 0px 0px #f0f7fa;
// 	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ebb105), color-stop(1, #f5d742));
// 	background:-moz-linear-gradient(top, #ebb105 5%, #f5d742 100%);
// 	background:-webkit-linear-gradient(top, #ebb105 5%, #f5d742 100%);
// 	background:-o-linear-gradient(top, #ebb105 5%, #f5d742 100%);
// 	background:-ms-linear-gradient(top, #ebb105 5%, #f5d742 100%);
// 	background:linear-gradient(to bottom, #ebb105 5%, #f5d742 100%);
// 	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ebb105', endColorstr='#f5d742',GradientType=0);
// 	background-color:#ebb105;
// 	-moz-border-radius:6px;
// 	-webkit-border-radius:6px;
// 	border-radius:6px;
// 	border:1px solid #c29b00;
// 	display:inline-block;
// 	cursor:pointer;
// 	color:#1b6ec3;
// 	/* font-family:Arial; */
// 	font-size:15px;
// 	font-weight:bold;
// 	padding:6px 24px;
// 	text-decoration:none;
// 	text-shadow:0px -1px 0px #5b6178;

//     &:hover{
//         background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f5d742), color-stop(1, #ebb105));
// 	background:-moz-linear-gradient(top, #f5d742 5%, #ebb105 100%);
// 	background:-webkit-linear-gradient(top, #f5d742 5%, #ebb105 100%);
// 	background:-o-linear-gradient(top, #f5d742 5%, #ebb105 100%);
// 	background:-ms-linear-gradient(top, #f5d742 5%, #ebb105 100%);
// 	background:linear-gradient(to bottom, #f5d742 5%, #ebb105 100%);
// 	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5d742', endColorstr='#ebb105',GradientType=0);
// 	background-color:#f5d742;
//     }
// `;

const Button = styled.button`
  position: absolute;
  z-index: 100;
  right: 3%;
  top: 3%;
  width: 12%;
  height: 7%;
  background-color: #c23cc6;
  background-image: linear-gradient(#f6ff00, #fcdf38);

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
        <a href="https://drive.google.com/file/d/1XltLHcSYtxnMb6J3mXRDAL-h5AdNyIaZ/view?usp=sharing" target="_blank">
        <Button>Download Resume</Button>
        </a>
    );
};

export default Cv;

/* @include btn-variant(#1e88e5, #64b5f6, #42a5f5, #bbdefb, #e3f2fd, #90caf9, #1976d2); */

