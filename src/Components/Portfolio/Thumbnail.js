import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 30%;
    background: yellowgreen;
    border: 1px  solid black;
`;

const Img = styled.img`
    height: auto;
    width: auto;
    margin: 6%;
    cursor: pointer;
`;

const Thumbnail = ({ imgSrc, handleClick, index }) => {
        return(
            <Container>
                <Img
                    src={imgSrc}
                    onClick={handleClick}
                    data-index={index}>
                </Img>
            </Container>
        )
}

export default  Thumbnail;