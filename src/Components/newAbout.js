import React from 'react';
import styled from 'styled-components';
import itSkills from './About/itskills.json';
import mgSkills from './About/mgskills.json';
import softSkills from './About/softskills.json';
import mSkills from './About/mskills.json';
import mgSoftware from './About/mgsoftware.json';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 0;
    margin-left: 25%;
    box-sizing: border-box;
`;

const Container = styled.div`
    margin: 0;
    width: 100%;
    padding: 1em;
    border-radius: 20px;
    background-color: #1b6ec3;
    background-image: linear-gradient(#1b6ec3, #22e0eb);
    box-shadow: 0px 1px 4px -2px #333;
    border-bottom: #1b6ec3 ridge 7px;
    border-left: #1b6ec3 groove 7px;
    box-sizing: border-box;
`;

const P = styled.p`
    color: #fff;
`;

const List = styled.ul`
    list-style: none;
    margin-top: 0;
`;

const ListItem = styled.li`
    display: inline;
    color: #fff;
`;

const Button = styled.button`
align-self: flex-end;
    margin: 0;
    margin-bottom: 1vh;
    width: 30%;
    padding: 1em;
    background-color: #c23cc6;
    background-image: linear-gradient(#f1ed7b, #f5e342);
    border-radius: 20px;
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;
    cursor: pointer;
    border-bottom: #f5e342 ridge 7px;
    border-left: #f5e342 groove 7px;
    text-align: center;
    box-sizing: border-box;
`;

const A = styled.a`
    color: #330867;
    font-family: 'Syncopate', sans-serif;
    text-transform: uppercase;
    text-decoration: none;
`;


const About = () => {
    return (
        <MainContainer>
            <Button><A href="https://www.dropbox.com/s/sdcefdfp1x62cew/melisA%20quesAdA%20cv%20frontend.pdf?dl=0" tArget="_blank" rel ="noopener noreferrer">Download my resume!</A></Button>
            <Container>
                <P>My name is Melisa Quesada. I am a Frontend developer but also a Motion designer.</P>
                <P>I describe myself as a creative problem solver.</P>
                <P>My skills: </P>
                <List>{itSkills.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</List>
                <List>{mgSkills.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</List>
                <List>{mgSoftware.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</List>
                <List>{softSkills.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</List>
                <List>{mSkills.map(skill => <ListItem key={skill.name}> {skill.name} </ListItem>)}</List>
            </Container>
        </MainContainer>
    );
};

export default About;