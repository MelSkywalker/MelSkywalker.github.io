import React, { Component } from 'react';
import styled from 'styled-components';

import Viewer from './newPortfolio/Viewer';
import SelectProject from './newPortfolio/SelectProject';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Portfolio = ({title, description, link, repository, tools}) => {
    return (
        <MainContainer>
            <Viewer/>
            <SelectProject/>
        </MainContainer>
    );
};

export default Portfolio;