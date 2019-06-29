import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 350px;
    height: 300px;
    perspective: 800px;
`;

const Box = styled.div`
    width: 100%;
    height: 100%
    transform-style: preserve-3d;
`;

const Face = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: pink;

`;

const Cube = () => {
    return(
        <Container>
            <Box></Box>
        </Container>
    );
};

export default Cube;