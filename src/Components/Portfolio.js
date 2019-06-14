import React from 'react';
import Project from './Portfolio/Project';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Portfolio = () => {
    return(
        <MainContainer>
            <Project />
            <Project />
            <Project />
        </MainContainer>
    );
};

export default Portfolio;