import React, { Component, Fragment } from 'react';
import { Vector2 } from 'three';
import styled from 'styled-components';
import Portfolio from './Portfolio';
import About from './newAbout';
import Contact from './newContact';

const Section = styled.section`
    height: 90%;
    width: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    position: absolute;
    top: 20%;
    padding-top: 0;
    padding-bottom: 8%;
`;

const Title = styled.h1`
    font-family: 'Audiowide', cursive;
    font-weight: normal;
    font-size: 10vh;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;

    text-transform: uppercase;
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Subtitle = styled.h2`
    font-family: 'Syncopate', sans-serif;
    font-size: 3vh;
    font-weight: lighter;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(to right, #e588d3 0%, #9f56cc 100%);
    -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
            <Fragment>
            <Section>
            <MainContainer onMouseMove={this.handleMouseMove}>
                <Container>
                    <Title>MELISA QUESADA</Title>
                    <Subtitle>FRONT END DEVELOPER & MOTION DESIGNER</Subtitle>
                </Container>
            </MainContainer>
            </Section>
            <Section><About></About></Section>
            <Section><Portfolio></Portfolio></Section>
            <Section><Contact></Contact></Section>
            </Fragment>
        );
    }
};

export default Home;