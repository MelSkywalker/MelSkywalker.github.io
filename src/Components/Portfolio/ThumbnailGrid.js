import React, { Component } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Projects from './projects.json'

const Container = styled.div`
    height: 35%;
    width: 100%;
    background: yellow;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const ThumbnailGrid = ({ projects, handleClick }) => {   
        return(
            <Container>
                {projects.map(((project, i) => {
                    return(
                        <Thumbnail
                            key={project.titile}
                            imgSrc={project.logo}
                            handleClick={handleClick}
                            index={i}
                        />
                    )
                }))}
            </Container>
        )
}

export default ThumbnailGrid;