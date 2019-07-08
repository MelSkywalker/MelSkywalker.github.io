import React from 'react';
import styled from 'styled-components';
import itSkills from './About/itskills.json';
import mgSkills from './About/mgskills.json';
import softSkills from './About/softskills.json';
import Resume from './About/cv.js';
import {Javascript} from 'styled-icons/boxicons-logos/Javascript';
import {Html5} from 'styled-icons/boxicons-logos/Html5';
import {Css3} from 'styled-icons/boxicons-logos/Css3';
import {ReactLogo} from 'styled-icons/boxicons-logos/ReactLogo';
import {Nodejs} from 'styled-icons/boxicons-logos/Nodejs';
import {Git} from 'styled-icons/boxicons-logos/Git';
import {Github} from 'styled-icons/boxicons-logos/Github';
// import {FileJson} from ' styled-icons/boxicons-solid/FileJson';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-left: 4em;
`;

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 80%;
    /* height: 50%; */
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
`;

const ItemIT = styled.li`
}`;

const ItemMg = styled.li`
}`;

const ItemSoft = styled.li`
}`;


const About = () => {
    return (
        <MainContainer>
            <Resume/>
            <Container>
                <P>My name is Melisa Quesada. I am a Frontend developer but also a Motion designer.</P>
                <P>I describe myself as a creative problem solver.</P>
                <Javascript/> <Html5/> <Css3/> <ReactLogo/> <Nodejs/> <Git/> <Github/>
            </Container>
            {/* <Container>
                <P>Hello! My name is Melisa Quesada but you can call me Mel.</P>
                <P>I am a Frontend Developer but also a Motion designer!</P>
                <P>I describe myself as a creative problem solver.</P>
            </Container>
            <Container>
                <P>My technical skills:</P>
                <List>
                    {itSkills.map(skill => <ItemIT key={skill.skill}>{skill.skill}</ItemIT>)}
                    {mgSkills.map(skill => <ItemMg key={skill.skill}>{skill.skill}</ItemMg>)}
                </List>
            </Container>
            <Container>
                <P>My soft skills:</P>
                <List>
                    {softSkills.map(skill => <ItemSoft key={skill.skill}>{skill.skill}</ItemSoft>)}
                </List>
            </Container> */}
        </MainContainer>
    );
};

export default About;