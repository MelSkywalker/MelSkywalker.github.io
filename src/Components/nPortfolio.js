import React from "react";
import { MainContainer, CardTextContainer, ProjectText, ProjectTitle, ProjectLink, ProjectTool, RevealImg, ToolsContainer, Card, CardContainer, CardContentA, CardContentB, CardReveal, ProjectImg, Hint, CardContent, Subtitle2, Footer, FooterNavLink, EmailIcon } from './styles.js';
import Projects from "./newPortfolio/projects.json";

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
                    <ProjectLink href={project.link} target='_blank' rel='noopener noreferrer'>{project.title}</ProjectLink>
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
