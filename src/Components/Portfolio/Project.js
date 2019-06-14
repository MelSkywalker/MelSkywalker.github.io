import React, { Component } from 'react';
import styled from 'styled-components';
import PokedexImg from './pokedexGo.png';
import PokedexGif from './pikachu.gif';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 40%;
    height: auto;

    margin: 2em, 2em, 1em, 2em;
`;

const TextContainer = styled.div`
    width: 100;
    height: auto;
    margin: 2em;
    padding: 1em;
    background-color: aliceblue;
`;

const ImgContainer = styled.div`
    width: 400px;
    height: 250px;
    overflow: hidden;
`;

const MainImg = styled.img`
    width: 100%;
    height: auto;
    margin: 2em;
`;

const HoverImg = styled.img`
    width: 100%;
    height: auto;
    margin: 2em;
`;

export default class Project extends Component {
    render() {
        return(
            <Container>
                    <MainImg src={PokedexImg}></MainImg>
                <TextContainer>
                    <h4>Pokedex Go!</h4>
                    <p>This is a Pokedex based in the Pokemon Go app and shows some data from the 1st Gen pokemon</p>
                </TextContainer>
            </Container>
        )
    }
}