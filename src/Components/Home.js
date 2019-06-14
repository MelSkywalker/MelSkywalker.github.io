import React from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

import Test3 from './Home/test.3';

const Title = styled.h1`
    font-family: 'Audiowide', cursive;
    font-weight: normal;
    font-size: 4em;
    text-align: center;
    color: aliceblue;
    margin-top: 50%;
`;

const Subtitle = styled.h2`
    font-family: 'Syncopate', sans-serif;
    font-weight: lighter;
    text-align: center;
    color: aliceblue;
`;

const Home = () => {
    return (
        <div>
        <Test3 />
        <Grid halign='center' valign='center'>
            <Grid.Unit size={1/2}>
                <Title>MELISA QUESADA</Title>
                <Subtitle>FRONT END DEVELOPER & MOTION DESIGNER</Subtitle>
            </Grid.Unit>
            <Grid.Unit size={1/2}></Grid.Unit>
        </Grid>
        </div>
    );
};

export default Home;