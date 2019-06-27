import React from 'react';
import styled from 'styled-components';

import Form from './Contact/Form';
import Map from './Contact/Map';
import SocialMedia from './Contact/SocialMedia';

import ContactImg from './Contact/contact-text.png';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 4em;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3em;
`;

const Img = styled.img`
    transform: rotate(-10deg);
    margin: 0 auto;
`;

const ContactMe = () => {
    return(
        <MainContainer>
            <Container>
                <Img src={ContactImg}></Img>
                <Form />
            </Container>
            <Container>
                <Map />
                <SocialMedia />
            </Container>
        </MainContainer>
    );
};

export default ContactMe;