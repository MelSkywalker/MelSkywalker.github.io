import React from "react";
import styled from "styled-components";
import { Github } from 'styled-icons/boxicons-logos';
import { LinkExternal } from 'styled-icons/boxicons-regular'
import { Link } from "styled-icons/feather";

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
    content: "";
    position: absolute;
    top: 1px;
    left: 2px;
    width: calc(100% - 4px);
    height: 6%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
`;

const MainViewer = styled.figure`
display: flex;
justify-content: center;
align-items: center;
box-shadow: inset 0 8px 3px -6px #858585;
/* box-shadow: inset 0 3px 3px #858585; */

  margin: 0;
  border-radius: 10px;
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
  /* padding-right: 2em; */
  /* border: white solid 3px; */
  width: 20%;
  height: 80%;
`;

const Thumbnail = styled.figure`
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
  margin: 0;
  box-shadow: inset 0 8px 2px -6px #858585;
  /* box-shadow: inset 0 3px 3px #858585; */
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
text-align: center;
  padding: 0.5em;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled.img`
margin: 1em;
  height: 3em;
  width: auto;
`;

const ProjectPicture = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const LogoPicture = styled.img`
    max-width: 80%;
    max-height: 80%;
`;

const ProjectTitle = styled.h2`
    text-align: center;
`;

const ProjectBody = styled.p``;

const Viewer = ({ title, description, link, repository, logo, tools, picture }) => {
  return (
    <MainContainer>
      <MainViewer>
        <a href={link} target="_blank">
          <ProjectPicture src={picture}></ProjectPicture>
          </a>
      </MainViewer>
      <Description>
        <Thumbnail>
            <LogoPicture src={logo}></LogoPicture>
        </Thumbnail>
        <TextContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectBody>{description}</ProjectBody>
        </TextContainer>
        <TextContainer>
          <Links href={link} target="_blank"><LinkExternal size="24" color="black"/> Project</Links>
          <Links href={repository} target="_blank"><Github size="24" color="black"/> Repository</Links>
        </TextContainer>
        <IconContainer>{tools.map( tool => {
            return <Icon src={tool}></Icon>
        })}</IconContainer>
      </Description>
    </MainContainer>
  );
};

export default Viewer;
