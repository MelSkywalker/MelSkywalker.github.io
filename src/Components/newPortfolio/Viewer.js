import React from "react";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos";
import { LinkExternal } from "styled-icons/boxicons-regular";
import { Link } from "styled-icons/feather";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  /* flex-wrap: wrap; */

  margin: 5vh;
  height: 65vh;
  width: 60vw;
  position: relative;
  /* display: inline-block; */
  background-color: #1b6ec3;
  background-image: linear-gradient(#1b6ec3, #22e0eb);

  border-bottom: #1b6ec3 ridge 7px;
  border-left: #1b6ec3 ridge 7px;
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
    height: 3%;
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
  box-shadow: inset 0 6px 3px -3px #858585;
  /* box-shadow: inset 0 3px 3px #858585; */

  border-left: #22e0eb ridge 3px;
  border-bottom: #22e0eb ridge 3px;
  border-top: #1b6ec3 groove 5px;
  border-right: #1b6ec3 groove 5px;

  margin: 0;
  border-radius: 10px;
  background-color: white;
  width: 60%;
  height: 80%;
  box-sizing: border-box;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin: 0 2em 0 2em;
  border-radius: 4px;
  /* padding-right: 2em; */
  /* border: white solid 3px; */
  width: 20%;
  height: 80%;
  box-sizing: border-box;
`;

const Thumbnail = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 0;
  box-shadow: inset 0 8px 2px -6px #858585;
  box-sizing: border-box;

  /* box-shadow: inset 0 3px 3px #858585; */
  border-left: #22e0eb ridge 2px;
  border-bottom: #22e0eb ridge 2px;
  border-top: #1b6ec3 groove 3px;
  border-right: #1b6ec3 groove 3px;
  background-color: rgba(255, 255, 255, .9);
  width: 100%;
  height: 40%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0 .5vw;
  width: 100%;
  height: 50%;
  border: #22e0eb ridge 2px;
  border-top: #1b6ec3 groove 3px;
  border-right: #1b6ec3 groove 3px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: inset 0 3px 2px -2px #858585;
  box-sizing: border-box;
`;

const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0 .5vw;
  width: 100%;
  height: 20%;
  border: #22e0eb ridge 2px;
  border-top: #1b6ec3 groove 3px;
  border-right: #1b6ec3 groove 3px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: inset 0 3px 2px -2px #858585;
  box-sizing: border-box;
`;

const Links = styled.a`
  text-align: center;
  padding: 0.5em;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 20%;

  border: #22e0eb ridge 2px;
  border-top: #1b6ec3 groove 3px;
  border-right: #1b6ec3 groove 3px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .9);
  box-shadow: inset 0 3px 2px -2px #858585;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const Icon = styled.img`
  margin: 5%;
  height: 70%;
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
  margin: 0;
  text-align: center;
`;

const ProjectBody = styled.p`
  margin: 1vh 0;
`;

const Viewer = ({
  title,
  description,
  link,
  repository,
  logo,
  tools,
  picture
}) => {
  return (
    <MainContainer>
      <MainViewer>
        <a href={link} target="_blank" rel ="noopener noreferrer">
          <ProjectPicture src={picture} />
        </a>
      </MainViewer>
      <Description>
        {/* <Thumbnail>
          <LogoPicture src={logo} />
        </Thumbnail> */}
        <TextContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectBody>{description}</ProjectBody>
        </TextContainer>
        <ProjectLinkContainer>
          <Links href={link} target="_blank" rel ="noopener noreferrer">
            <LinkExternal size="24" color="black" /> Project
          </Links>
          {/* <Links href={repository} target="_blank" rel ="noopener noreferrer">
            <Github size="24" color="black" /> Repository
          </Links> */}
        </ProjectLinkContainer>
        <IconContainer>
          {tools.map(tool => {
            return <Icon src={tool} />;
          })}
        </IconContainer>
      </Description>
    </MainContainer>
  );
};

export default Viewer;
