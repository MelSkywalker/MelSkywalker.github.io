import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 25%;
height: 35%;
padding: 2em;

  position: relative;
  background-color: #c23cc6;
  background-image: linear-gradient(#c23cc6, #de6ae6);

  border-radius: 20px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
  box-shadow: 0px 1px 4px -2px #333;
    border-bottom: #de6ae6 ridge 7px;
    border-left: #de6ae6 groove 7px;

  &:after {
    border-radius: 30px;
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 5%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
`;

const Title = styled.label`
    align-self: center;
    margin-bottom: 1em;
    color: #fde892;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Input = styled.input`
    background-color: white;
    margin: 0.5em;
    padding: 1em;
    border-radius: 5px;
`;

const InputName = styled.input`
    background-color: white;
    margin: 0.5em;
    padding: 1em;
    width: 50%;
    border-radius: 5px;

`;

const Textarea = styled.textarea`
    background-color: white;
    margin: 0.5em;
    padding: 1em;
    height: 50%;
    border-radius: 5px;
    border: 0;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
`;

const Button = styled.button`
    margin: 0.5em;
    height: 3em;
    width: 30%;
    align-self: center;
    border-radius: 6px;
    background-color: #f1ed7b;
    border: 0;
    border-left: #f2d55a groove 4px;
    border-bottom: #f2d55a ridge 4px;
    border-radius: 20px;
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;
    cursor: pointer;

    &:active{
        background-color: #e5de5a;
        border-left: #e5de5a ridge 4px;
        border-bottom: #e5de5a groove 4px;
    }
`;

class NewForm extends Component {
    state = {
        name: '',
        message: '',
        subject: '',
        email: '',
        sent: false,
        buttonText: 'SEND!'
    }

    formSubmit= (e) => {
        e.preventDefault();
        this.setState({
            buttonText: '...sending',
        })
        const data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }
        fetch('https://mel-portfolio-backend.herokuapp.com/', {
        // fetch('http://localhost:3001/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {this.setState({ sent: true }, this.resetForm())})
        .catch(err => console.log('Fetch error: ', err))

        // axios.post('https://portfoliobe.herokuapp.com/', data)
        //     .then( res => {
        //         this.setState({ sent: true }, this.resetForm())
        //     })
        //     .catch( () => {
        //         console.log('Message not sent')
        //     })
    }

    resetForm = () => {
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:'',
            buttonText: 'MESSAGE SENT!',
        })
    }
    render() {
    return (
        <Form onSubmit={ (e) => this.formSubmit(e) } enctype="multipart/form-data">
            <Title>LET'S WORK TOGETHER!</Title>
            <Div>
                <InputName type="text" placeholder="Name" name="name" value={this.state.name} onChange={ e => this.setState({ name: e.target.value }) } required></InputName>
                <InputName type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } required></InputName>
            </Div>
            <Input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={ e => this.setState({ subject: e.target.value }) } required></Input>
            <Textarea placeholder="Message" name="message" value={this.state.message} onChange={ e => this.setState({ message: e.target.value }) } required></Textarea>
            <Button type='submit'>{this.state.buttonText}</Button>
        </Form>
    );
}
};

export default NewForm;