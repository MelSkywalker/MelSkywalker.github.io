import React, { Component } from 'react';
import styled from 'styled-components';
import GithubLogo from './GitHub-Mark-Light-32px.png';
import LinkedInLogo from './LI-In-Bug.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Icon = styled.img`
    margin: 1em;
    width: auto;
    height: 32px;
`;

export default class SocialMedia extends Component {
    render() {
        return(
            <Container>
                <a href='https://github.com/MelSkywalker'><Icon src={GithubLogo}></Icon></a>
                <a href='https://www.linkedin.com/in/meldev/'><Icon src={LinkedInLogo}></Icon></a>
            </Container>
        )
    }
}