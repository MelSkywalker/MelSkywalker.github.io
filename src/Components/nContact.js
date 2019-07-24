import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #fff;
`;

const Subtitle2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-weight: lighter;
    font-size: 4vw;
    color: white;
    background-image: linear-gradient(#e7529c, #d4009f);
    padding: 1vw 1vw;
    position: absolute;
    top: 5%;
    left: 5%;
    border-radius: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #303030;
    height: 50vh;
    width: 50%;
    padding: 3% 10%;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 30vh;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`;

const Input = styled.input`
    background-color: white;
    box-sizing: border-box;
    margin: 1em 0 0 0;
    padding: 1em;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
`;

const InputName = styled.input`
    background-color: white;
    box-sizing: border-box;
    padding: 1em;
    width: 50%;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    &:nth-of-type(1){
        margin-right: 0.5em;
    }
    &:nth-of-type(2){
        margin-left: 0.5em;
    }
`;

const Textarea = styled.textarea`
    background-color: white;
    box-sizing: border-box;
    margin: 1em 0 1em 0;
    padding: 1em;
    height: 50%;
    border-radius: 5px;
    border: 0;
    font-family: 'Montserrat', sans-serif;
`;

const Button = styled.button`
    background-color: #d4009f;
    box-sizing: border-box;
    margin: 0;
    padding: 1em;
    width: 100%;
    border-radius: 5px;
    border: 0;
    color: white;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: bold;
`;

const Footer = styled.footer`
    width: 100%;
    height: 5%;
    background-color: #303030;
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 99;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5%;
`;

class Contact extends Component {
    state = {
        name: '',
        message: '',
        subject: '',
        email: '',
        sent: false,
        buttonText: 'SEND ME A MESSAGE!'
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
        fetch('http://mel-portfolio-backend.herokuapp.com/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {this.setState({ sent: true }, this.resetForm())})
        .catch(err => console.log('Fetch error: ', err))
    }

    resetForm = () => {
        this.setState({
            name:'',
            email:'',
            subject:'',
            message:'',
            buttonText: 'SEND!',
        })
    }
    render() {
    return (
        <MainContainer>
            <Subtitle2>LET'S WORK TOGETHER!</Subtitle2>
            <Form onSubmit={ (e) => this.formSubmit(e) } enctype="multipart/form-data">
                <Div>
                    <InputName type="text" placeholder="NAME" name="name" value={this.state.name} onChange={ e => this.setState({ name: e.target.value }) } required></InputName>
                    <InputName type="email" placeholder="E-MAIL" name="email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } required></InputName>
                </Div>
                <Input type="text" placeholder="SUBJECT" name="subject" value={this.state.subject} onChange={ e => this.setState({ subject: e.target.value }) } required></Input>
                <Textarea placeholder="MESSAGE" name="message" value={this.state.message} onChange={ e => this.setState({ message: e.target.value }) } required></Textarea>
                <Button type='submit'>{this.state.buttonText}</Button>
            </Form>
            <Footer></Footer>
        </MainContainer>
    );
}
};

export default Contact;