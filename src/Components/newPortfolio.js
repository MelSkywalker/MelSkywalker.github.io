import React, { Component } from 'react';
import styled from 'styled-components';

const Viewer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    margin: 5vw;
    height: 50vh;
    width: 50vw;
    position: relative;
	/* display: inline-block; */
    background-color: #42ecf5;
    background-image: linear-gradient(#42ecf5, #96faff);

    border-radius: 30px;
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;

    &:after {
        content: '';
	    position: absolute;
        top: 2px;
        left: 2px;
        width: calc(100% - 4px);
        height: 30%;
        background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }

    &:hover{
	background: linear-gradient(#23d2db,#7ddee3);
}
`;

const Portfolio = () => {
    return (
        <Viewer>
            
        </Viewer>
    );
};

export default Portfolio;