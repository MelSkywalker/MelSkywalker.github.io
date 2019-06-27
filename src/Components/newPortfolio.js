import React, { Component } from 'react';
import styled from 'styled-components';

import Viewer from './newPortfolio/Viewer';
import SelectProject from './newPortfolio/SelectProject';

const Portfolio = ({title, description, link, repository, tools}) => {
    return (
        <div>
            <Viewer></Viewer>
            <SelectProject></SelectProject>
        </div>
    );
};

export default Portfolio;