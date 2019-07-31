import React, { Component } from 'react';
import { MainContainer, Subtitle2, Form, Div, Input, InputName, Textarea, SendButton, Footer } from './styles.js';

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
            <Subtitle2>LET'S TALK!</Subtitle2>
            <Form onSubmit={ (e) => this.formSubmit(e) } enctype="multipart/form-data">
                <Div>
                    <InputName type="text" placeholder="NAME" name="name" value={this.state.name} onChange={ e => this.setState({ name: e.target.value }) } required></InputName>
                    <InputName type="email" placeholder="E-MAIL" name="email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } required></InputName>
                </Div>
                <Input type="text" placeholder="SUBJECT" name="subject" value={this.state.subject} onChange={ e => this.setState({ subject: e.target.value }) } required></Input>
                <Textarea placeholder="MESSAGE" name="message" value={this.state.message} onChange={ e => this.setState({ message: e.target.value }) } required></Textarea>
                <SendButton type='submit'>{this.state.buttonText}</SendButton>
            </Form>
            <Footer></Footer>
        </MainContainer>
    );
}
};

export default Contact;