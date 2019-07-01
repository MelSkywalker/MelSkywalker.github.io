import React, { Fragment } from 'react';
import styled from 'styled-components';
import Form from './Contact/newForm';
// import Form from './Contact/Form';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 100%;
`;

// const Button = styled.button`
//     margin: 0.5em;
//     height: 3em;
//     width: 20%;
//     align-self: flex-end;
//     font-family: 'Montserrat', sans-serif;
//     font-weight: bold;
// `;

const HireMe = () => {
    return(
        <Container>
            <Form></Form>
            {/* <Button type="submit">SEND!</Button> */}
        </Container>
    );
};

export default HireMe;