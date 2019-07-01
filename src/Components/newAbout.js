import React from 'react';
import styled from 'styled-components';
import itSkills from './About/itskills.json';
import mgSkills from './About/mgskills.json';
import softSkills from './About/softskills.json';

const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-start;
    border: solid blue 2px;
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
    return(
        <Container>
            <P>
                Hello! My name is Melisa Quesada but you can call me Mel.
            </P>
            <P>
                I am a Frontend Developer but also a Motion designer! And I describe myself as a creative problem solver.
            </P>
            <P>
                My technical skills:
            </P>
            <List>
                {itSkills.map( skill => <ItemIT key={skill.skill}>{skill.skill}</ItemIT>)}
                {mgSkills.map( skill => <ItemMg key={skill.skill}>{skill.skill}</ItemMg>)}
            </List>
            <P>
                My soft skills:
            </P>
            <List>
                {softSkills.map( skill => <ItemSoft key={skill.skill}>{skill.skill}</ItemSoft>)}
            </List>
        </Container>
    );
};

export default About;