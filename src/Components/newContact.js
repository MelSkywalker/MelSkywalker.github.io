import React from 'react';
import styled from 'styled-components';
import Form from './Contact/newForm';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
`;

const HireMe = () => {
    return(
        <Container>
            <Form></Form>
        </Container>
    );
};

export default HireMe;