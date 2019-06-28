import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */

    margin: 5vh;
    height: 65vh;
    width: 70vw;
    position: relative;
	/* display: inline-block; */
    background-color: #548fdf;
    background-image: linear-gradient(#1b6ec3, #22e0eb);

    border-radius: 40px;
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;

    &:after {
        border-radius: 40px;
        content: '';
	    position: absolute;
        top: 2px;
        left: 2px;
        width: calc(100% - 4px);
        height: 5%;
        background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }
`;

const MainViewer = styled.figure`
    margin: 0;
    border-radius: 5px;
    background-color: white;
    width: 60%;
    height: 80%;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    padding-left: 2em;
    padding-right: 2em;
    border: white solid 3px;
    width: 20%;
    height: 80%;
`;

const Thumbnail = styled.figure`
    margin: 0;
    background-color: white;
    width: 100%;
    height: 40%;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
`;

const Links = styled.a`
    border: white solid 1px;
    padding: 0.5em;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Icon = styled.img`
    height: 32px;
    width: auto;
`;

const ProjectTitle = styled.h2``;
const ProjectBody = styled.p``;

class Viewer extends Component {
    render(){
    return (
        <MainContainer>
            <MainViewer>
                Picture
            </MainViewer>
            <Description>
                <Thumbnail>Logo</Thumbnail>
                <TextContainer>
                    <ProjectTitle>title</ProjectTitle>
                    <ProjectBody>description</ProjectBody>
                </TextContainer>
                <TextContainer>
                    <Links href='link'>Project</Links>
                    <Links href='repository'>Repository</Links>
                </TextContainer>
                <IconContainer>tools</IconContainer>
            </Description>
        </MainContainer>
    );
}
};

export default Viewer;