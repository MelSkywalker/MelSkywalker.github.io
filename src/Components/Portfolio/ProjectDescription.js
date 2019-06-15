import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 40%;
    background: gainsboro;
`;

const ProjectDescription = ({ title, description, link, repository, tools }) => {
        return(
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{link}</p>
                <p>{repository}</p>
                <p>{tools}</p>
            </Container>
        )
}

export default ProjectDescription;