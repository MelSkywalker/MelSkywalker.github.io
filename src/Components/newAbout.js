import React from 'react';
import styled from 'styled-components';
import itSkills from './About/itskills.json';
import mgSkills from './About/mgskills.json';
import softSkills from './About/softskills.json';
import mSkills from './About/mskills.json';
import mgSoftware from './About/mgsoftware.json';
import Resume from './About/cv.js';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-left: 10%;
    margin-right: 8%;
`;

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 80%;
    padding: 1em;
    border-radius: 20px;
    background-image: linear-gradient(#42f5d7, #17e5e8);
    box-shadow: 0px 1px 4px -2px #333;
    border-bottom: #17e5e8 ridge 7px;
    border-left: #17e5e8 groove 7px;
`;

const P = styled.p`
`;

const List = styled.ul`
    list-style: none;
    margin-top: 0;
`;

const ListItem = styled.li`
    display: inline;
`;


const About = () => {
    return (
        <MainContainer>
            <Resume/>
            <Container>
                <P>My name is Melisa Quesada. I am a Frontend developer but also a Motion designer.</P>
                <P>I describe myself as a creative problem solver.</P>
                <P>My skills: </P>
                <List>{mSkills.map(skill => <ListItem key={skill.name}>{skill.name} </ListItem>)}</List>
                <List>{itSkills.map(skill => <ListItem key={skill.name}>{skill.name} </ListItem>)}</List>
                <List>{mgSkills.map(skill => <ListItem key={skill.name}>{skill.name} </ListItem>)}</List>
                <List>{mgSoftware.map(skill => <ListItem key={skill.name}>{skill.name} </ListItem>)}</List>
                <List>{softSkills.map(skill => <ListItem key={skill.name}>{skill.name} </ListItem>)}</List>
            </Container>
        </MainContainer>
    );
};

export default About;