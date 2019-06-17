import React, { Component } from 'react';
import { Vector2 } from 'three';
import styled from 'styled-components';

import Test3 from './Home/test.3';

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    margin-left: 8%;
    position: absolute;
    padding-top: 0;
    padding-bottom: 8%;
`;

const Title = styled.h1`
    font-family: 'Audiowide', cursive;
    font-weight: normal;
    font-size: 5em;
    text-align: left;
    color: aliceblue;
    margin-top: 0;
    margin-bottom: 0;
`;

const Subtitle = styled.h2`
    font-family: 'Syncopate', sans-serif;
    font-size: 1.8em;
    font-weight: lighter;
    text-align: left;
    color: aliceblue;
`;

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mouse: new Vector2(),
            windowHalf: new Vector2(window.innerWidth/2, window.innerHeight/2),
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            mouse: {
                x: e.clientX - this.state.windowHalf.x,
                y: e.clientY - this.state.windowHalf.x,
            }
        });
    }

    render() {
        return (
            <MainContainer onMouseMove={this.handleMouseMove}>
                <Test3 mouseX={this.state.mouse.x} mouseY={this.state.mouse.y} windowHalf={this.windowHalf}/>
                <Container>
                    <Title>MELISA QUESADA</Title>
                    <Subtitle>FRONT END DEVELOPER & MOTION DESIGNER</Subtitle>
                </Container>
            </MainContainer>
        );
    }
};

export default Home;