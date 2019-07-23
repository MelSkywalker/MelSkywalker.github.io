import React from 'react';
import styled from 'styled-components';
import ReactSnapScroll from 'react-snap-scroll';
import { MailOutline } from 'styled-icons/material/MailOutline';
import { NavLink } from "react-router-dom";

import { device } from './Device';
import { Github } from 'styled-icons/fa-brands/Github';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

import mel_photo from './Home/img/mel_photo.png'
import skills from './About/skills.json';
import skills2 from './About/skills2.json';
import techSkills from './About/techSkills.json';

const Section = styled.section`
    width: 100%;
    height: 90vh;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #202020;
`;

const Section2 = styled.section`
    width: 100%;
    height: 90vh;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const SocialNetworkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 10%;
    margin-top: 2%;
`;

const Link = styled.a`
    margin: 0 10%;
    box-sizing: border-box;
`;

const GithubIcon = styled(Github)`
    color: white;
    width: 100%;
    height: auto;
`;

const LinkedinIcon = styled(Linkedin)`
    color: white;
    width: 100%;
    height: auto;
`;

const Img = styled.img`
    width: 20%;
    @media ${device.desktop} {
        width: 10%;
    }
`;

const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    font-weight: lighter;
    font-size: 5vw;
    margin-bottom: 0;
    color: #d4009f;
    background: linear-gradient(to bottom right, #d4009f, #e7529c );
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
const Subtitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: lighter;
    font-size: 1.5vw;
    color: #f993cb;
    background: linear-gradient(to bottom, #e7529c, #f993cb );
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Subtitle2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
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

const TextContainer = styled.div`
    width: 50%;
    align-self: center;
`;

const P = styled.p`
    color: #202020;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    text-align: left;
`;

const ListContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ItemList = styled.ul`
    list-style: none;
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
`;

const ListItem = styled.li`
    display: inline;
    box-sizing: border-box;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    border: 3px solid #e7529c;
    margin: 5px 10px;
    padding: 5px;
`;

const ItemList2 = styled.ul`
    list-style: none;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

const ListItem2 = styled.li`
    box-sizing: border-box;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 1vw;
    margin: 5px;
    padding: 5px;
`;

const ButtonLink = styled.a`
    width: 20%;
    height: 5%;
`;

const Button = styled.button`
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10%;
    width: 100%;
    height: 100%;
    background-color: #d4009f;
    color: white;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    cursor: pointer;
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

const Home = () => {
    return(
       <ReactSnapScroll transition="move-top-bottom">
            <Section>
            <Img src={mel_photo}/>
                 <Title>MEL QUESADA</Title>
                 <Subtitle>FRONTEND DEVELOPER && MOTION DESIGNER</Subtitle>
                 <SocialNetworkContainer>
                     <Link href='https://github.com/MelSkywalker' target="_blank" rel ="noopener noreferrer"><GithubIcon /></Link>
                     <Link href='https://www.linkedin.com/in/meldev/' target="_blank" rel ="noopener noreferrer"><LinkedinIcon /></Link>
                 </SocialNetworkContainer>
            </Section>
            <Section2>
            <Subtitle2>SUMMARY</Subtitle2>
                <TextContainer>
                    <P>I love technology and animation!</P>
                    <P>Since 2013 I have worked as a motion designer, creating graphic content and producing videos for advertising and social media.</P>
                    <P>In 2017 I discovered the development world and in 2019 I decided to change my career path.
                    Since then I have been involved in several projects as a frontend developer.</P>
                 </TextContainer>
                 <ButtonLink href="https://www.dropbox.com/s/xd1pfzj9aa1ayve/mel%20quesada%20resume.pdf?dl=0" target="_blank" rel ="noopener noreferrer">
                    <Button>Take a look at my resume!</Button>
                </ButtonLink>
            </Section2>
            <Section>
            <Subtitle2>SKILLS</Subtitle2>
                <ListContainer>
                    <ItemList>{skills.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</ItemList>
                    <ItemList>{skills2.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</ItemList>
                    <ItemList2>{techSkills.map(skill => <ListItem2 key={skill.name}> {skill.name} </ListItem2>)}</ItemList2>
                </ListContainer>
                <Footer>
                    <FooterNavLink to='/contact'>
                        <EmailIcon />
                        <FooterText>Send me an email!</FooterText>
                    </FooterNavLink>
                </Footer>
            </Section>
        </ReactSnapScroll>
    );
};

export default Home;