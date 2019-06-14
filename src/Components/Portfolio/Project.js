import React, { Component } from 'react';
import PokedexImg from './pokedexGo.png';

export default class Project extends Component {
    render() {
        return(
            <div>
                <img src={PokedexImg} width='50%' height='auto' />
                <div>
                    <h4>Pokedex Go!</h4>
                    <p>Nuestro proyecto, llamado Pokédex Go, se basa en la mini computadora que se dedicaba a catalogar la información </p>
                </div>
            </div>
        )
    }
}