import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    height: 100%;
    width: 40%;
    margin: 1em;
    background: rgba(220, 220, 220. 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ProjectTitle = styled.h1`
    font-family: 'Righteous', cursive;
`;

const ProjectBody = styled.p`
    font-family: 'Maven Pro', sans-serif;
`;

const ProjectLink = styled.a`
    font-family: 'Maven Pro', sans-serif;
`;

const Icon = styled.img`
    margin: 1em;
    width: auto;
    height: 32px;
`;

const ProjectDescription = ({ title, description, link, repository, tools }) => {
        return(
            <MainContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectBody>{description}</ProjectBody>
                <ProjectLink href={link}>Project</ProjectLink>
                <ProjectLink href={repository}>Repository</ProjectLink>
                <Container>
                    {tools.map( tool => {
                        return <Icon src={tool}></Icon>
                    })}
                </Container>
            </MainContainer>
        )
}

export default ProjectDescription;