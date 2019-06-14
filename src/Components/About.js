import React from 'react';
import Timeline from './About/Timeline';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 50%;
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
        </MainContainer>
    );
};

export default AboutMe;