import React from 'react';
import Form from './Contact/Form';
import Map from './Contact/Map';
import SocialNetwork from './Contact/SocialNetworks';

const ContactMe = () => {
    return(
        <div>
            <p>Hire Me!</p>
            <Form />
            <Map />
            <SocialNetwork />
        </div>
    );
};

export default ContactMe;