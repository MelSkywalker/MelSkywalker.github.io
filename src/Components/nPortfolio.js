import React from 'react';
import styled from 'styled-components';

const Subtitle2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: lighter;
    font-size: 4vw;
    color: white;
    background-image: linear-gradient(#e7529c, #d4009f);
    padding: 1vw 1vw;
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 10px;
`;

const Portfolio = () => {
    return(
       <Subtitle2>TAKE A LOOK!</Subtitle2>
    );
};

export default Portfolio;