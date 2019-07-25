import React from "react";
import styled from "styled-components";
import { MailOutline } from 'styled-icons/material/MailOutline';
import { NavLink } from "react-router-dom";
import Projects from "./newPortfolio/projects.json";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const Subtitle2 = styled.h2`
  font-family: "Montserrat", sans-serif;
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

const Footer = styled.footer`
    width: 100%;
    height: 5%;
    background-color: #303030;
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

const FooterNavLink = styled(NavLink)`
    height: 80%;
    width: 15%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;
    &:active {
        color: white;
    }
    &:visited {
        color: white;
    }
    &:hover {
        color: white;
    }
`;

const EmailIcon = styled(MailOutline)`
    color: white;
    height: 100%;
    margin-right: 10%;
`;

const CardTextContainer = styled.div`
    width: 100%;
    height: 70%;
    margin: 10px 0;
    align-self: center;
`;

const ProjectText = styled.p`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-align: left;
`;

const ProjectTitle = styled.h3`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 5px 0 5px 0;
`;

const ProjectLink = styled.a`
    color: #e7529c;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-align: left;
    display: block;
`;

const ProjectTool = styled.img`
    height: 50px;
`;
const RevealImg = styled.img`
    height: 100%;
`;

const ToolsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    height: 30%;
    padding-bottom: 10px;
`;

const Card = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    position: relative;
    border: 1px solid #d4009f;
    border-top: 0;
    border-bottom: 0;
    &:nth-of-type(1){
        border-left: 0;
    }
    &:nth-last-of-type(1){
        border-right: 0;
    }
`;

const CardContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
`;

const CardContentA = styled.div`
    height: 30%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
`;
const CardContentB = styled.div`
    height: 70%;
    width: 100%;
    background-color: #303030;
    padding: 0 5% 5% 5%;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
`;

const CardReveal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    background-color: #d4009f;
    position: absolute;
    overflow: hidden;
    transition: all 0.4s ease-in-out;
    width: 100%;
    height: 100%;
    top:0%;

    ${Card}:hover &{
        top: -100%;
    }
`;

const ProjectImg = styled.img`
    width: 80%;
`;

const Hint = styled.p`
    color: #303030;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    text-align: center;
    position: absolute;
    bottom: 10vh;
`;

const CardContainer = styled.div`
    background-color: #303030;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: stretch;
    overflow: hidden;
    margin-top: 30vh;
    height: 50vh;
    width: 50%;
    border-radius: 5px;
    border: 2px solid #d4009f;
`;

const Portfolio = () => {
  return (
    <MainContainer>
        <Subtitle2>TAKE A LOOK!</Subtitle2>
        <CardContainer>
        {Projects.map(project =>
            <Card>
            <CardContent>
                <CardContentA>
                    <ProjectImg src={project.logo}/>
                </CardContentA>
                <CardContentB>
                    <CardTextContainer>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.description}</ProjectText>
                    <ProjectLink href={project.link}>Link</ProjectLink>
                    </CardTextContainer>
                    <ToolsContainer>{project.tools.map(tool =>
                        <ProjectTool src={tool}></ProjectTool>
                    )}</ToolsContainer>
                </CardContentB>
            </CardContent>
            <CardReveal><RevealImg src={project.picture2}></RevealImg></CardReveal>
        </Card>
        )}
        </CardContainer>
        <Hint>Hover over the images</Hint>
        <Footer>
            <FooterNavLink to='/contact'>
                <EmailIcon />
                Send me an email!
            </FooterNavLink>
        </Footer>
    </MainContainer>
  );
};

export default Portfolio;
