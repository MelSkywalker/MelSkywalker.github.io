import React from 'react';
import Timeline from './About/Timeline';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const AboutMe = () => {
    return(
        <MainContainer>
            <Container>
                <Timeline />
            </Container>
            <Container></Container>
        </MainContainer>
    );
};

export default AboutMe;