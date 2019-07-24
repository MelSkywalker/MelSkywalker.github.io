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
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
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
`;

const FooterText = styled.p`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
`;

const CardTextContainer = styled.div`
    width: 50%;
    align-self: center;
`;

const ProjectText = styled.p`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    text-align: left;
    margin: 10px 0;
`;

const ProjectTitle = styled.h3`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    text-align: center;
`;

const ProjectLink = styled.a`
    color: #e7529c;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    text-align: left;
`;

const ProjectTool = styled.img`
    height: 50px;
`;
const RevealImg = styled.img`
    width: 100%;
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
    height: 50vh;
    width: 20%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    margin: 30vh 2vw 2vw 10vw;
    border-radius: 5px;
    border: 2px solid #d4009f;
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
    height: 50%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10%;
`;
const CardContentB = styled.div`
    height: 50%;
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
    padding: 0;
    background-color: #d4009f;
    position: absolute;
    overflow: hidden;
    transition: all 0.3s ease-in;
    width: 100%;
    height: 50%;
    left:-100%;
    opacity: .8;

    ${Card}:hover &{
        left: 0;
        opacity: 1;
    }
`;

const ProjectImg = styled.img`
    width: 80%;
`;

const Portfolio = () => {
  return (
    <MainContainer>
        <Subtitle2>TAKE A LOOK!</Subtitle2>
        {Projects.map(project => 
            <Card>
            <CardContent>
                <CardContentA>
                    <ProjectImg src={project.logo}/>
                </CardContentA>
                <CardContentB>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectText>{project.description}</ProjectText>
                    <ProjectText><ProjectLink href={project.link}>Link</ProjectLink></ProjectText>
                    <ProjectText><ProjectLink href={project.repository}>Repository</ProjectLink></ProjectText>
                    <ToolsContainer>{project.tools.map(tool => 
                        <ProjectTool src={tool}></ProjectTool>
                    )}</ToolsContainer>
                </CardContentB>
            </CardContent>
            <CardReveal><RevealImg src={project.picture2}></RevealImg></CardReveal>
        </Card>
        )}
        <Footer>
            <FooterNavLink to='/contact'>
                <EmailIcon />
                <FooterText>Send me an email!</FooterText>
            </FooterNavLink>
        </Footer>
    </MainContainer>
  );
};

export default Portfolio;
