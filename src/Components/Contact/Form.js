import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return(
            <form>
                <input placeholder='Name' type='text' required autoFocus></input>
                <input placeholder='E-mail' type='email' required></input>
                <input placeholder='Subject' required></input>
                <textarea placeholder='Message' required></textarea>
                <button type='submit'>Send!</button>
            </form>
        )
    }
}