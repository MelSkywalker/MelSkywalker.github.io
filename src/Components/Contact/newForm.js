import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 40%;
height: 30%;
padding: 2em;

  position: relative;
  background-color: #c23cc6;
  background-image: linear-gradient(#c23cc6, #de6ae6);

  border-radius: 20px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;

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

const NewForm = () => {
    return (
        <Form>
            <Div>
                <InputName type="text" placeholder="Name" required></InputName>
                <InputName type="email" placeholder="E-mail" required></InputName>
            </Div>
            <Input type="text" placeholder="Subject" required></Input>
            {/* <Input type="text" placeholder="Message" required></Input> */}
            <Textarea placeholder="Message" required></Textarea>
        </Form>
    );
};

export default NewForm;