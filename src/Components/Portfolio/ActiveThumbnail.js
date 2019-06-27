import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 60%;
    background: #333;
    position: relative;
`;

const Img = styled.img`
    height: 100%
    width: auto;
`;

const ActiveThumbnail = ({ activeThumbnail }) => {
        return(
            <Container>
                <Img src={activeThumbnail.picture }></Img>
            </Container>
        )
}

export default ActiveThumbnail;