import React from 'react';
import ReactSnapScroll from 'react-snap-scroll';
import {Section, Section2, SocialNetworkContainer, Link, GithubIcon, LinkedinIcon, Img, ScrollImg, Title, Subtitle, Subtitle2, TextContainer, P, ListContainer, ItemList, ListItem, ItemList2, ListItem2, ButtonLink, Button, Footer, FooterNavLink, EmailIcon } from './styles';
import mel_photo from './Home/img/mel_photo.png'
import skills from './About/skills.json';
import skills2 from './About/skills2.json';
import techSkills from './About/techSkills.json';

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
                 <ScrollImg src='https://i.imgur.com/VD1cAop.png' />
            </Section>
            <Section2>
            <Subtitle2>
               SUMMARY
            </Subtitle2>
                <TextContainer>
                    <P>I love technology and animation!</P>
                    <P>Since 2013 I have worked as a motion designer, creating graphic content and producing videos for advertising and social media.</P>
                    <P>In 2017 I discovered the development world and in 2019 I decided to change my career path.
                    Since then I have been involved in several projects as a frontend developer.</P>
                 </TextContainer>
                 <ButtonLink href="https://www.dropbox.com/s/xd1pfzj9aa1ayve/mel%20quesada%20resume.pdf?dl=0" target="_blank" rel ="noopener noreferrer">
                    <Button>Take a look at my resume!</Button>
                </ButtonLink>
                <ScrollImg src='https://i.imgur.com/VD1cAop.png' />
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
                        Send me an email!
                    </FooterNavLink>
                </Footer>
            </Section>
        </ReactSnapScroll>
    );
};

export default Home;