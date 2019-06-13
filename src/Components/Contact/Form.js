import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return(
            <form>
                <label>Name:</label>
                <input placeholder='Full name' type='text' required autoFocus></input>
                <label>E-mail:</label>
                <input placeholder='E-mail' type='email' required></input>
                <label>Message:</label>
                <textarea placeholder='Message' required></textarea>
                <button type='submit'>Send!</button>
            </form>
        )
    }
}