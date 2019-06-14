import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

const Form = styled.form`
    margin: 3em;
    padding: 2em;
    background-color: #666666;
    display: flex;
    flex-direction: column;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Input = styled.input`
    border-radius: 0;
    border: none;
    padding: 1em;
    margin: 0.5em;
    width: 45%;
    font-family: 'Montserrat', sans-serif;

`;

const InputSubject = styled.input`
    border-radius: 0;
    border: none;
    padding: 1em;
    margin: 0.5em;
    font-family: 'Montserrat', sans-serif;

`;

const Textarea = styled.textarea`
    border-radius: 0;
    border: none;
    padding: 1em;
    margin: 0.5em;
    font-family: 'Montserrat', sans-serif;
`;

const Button = styled.button`
    margin: 0.5em;
    height: 3em;
    width: 20%;
    align-self: flex-end;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`;

export default class ContactForm extends Component {
    render() {
        return(
            <Form>
                <Div>
                    <Input placeholder='Name' type='text' required autoFocus></Input>
                    <Input placeholder='E-mail' type='email' required></Input>
                </Div>
                <InputSubject placeholder='Subject' required></InputSubject>
                <Textarea placeholder='Message' required></Textarea>
                <Button type='submit'>SEND!</Button>
            </Form>
        )
    }
}