import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 5vw;
    height: 10vh;
    width: 40vw;
    position: relative;
	/* display: inline-block; */
    background-color: #c231cc;
    background-image: linear-gradient(#c231cc, #de6ae6);

    border-radius: 10px;
    box-shadow: 0px 1px 4px -2px #333;
    text-shadow: 0px -1px #333;

    &:after {
        border-radius: 10px;
        content: '';
	    position: absolute;
        top: 2px;
        left: 2px;
        width: calc(100% - 4px);
        height: 30%;
        background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    }
`;

const ProjectSelector = styled.select`
    height: 60%;
    width: 70%;
    box-sizing: content-box;
    background-color: white;
    border-radius: 4px;
    box-shadow: inset 0 8px 2px -6px #000;
    margin: 0;
    appearance: none;

    &:after{
        content:'\f0d7';
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
        background: yellow;
        color: yellow;
    }
`;

const SelectProject = () => {
    return (
        <MainContainer>
            <ProjectSelector>
                <option value="" hidden>Select Project</option>
                <option value="1">Project 1</option>
                <option value="2">Project 2</option>
                <option value="3">Project 3</option>
            </ProjectSelector>
        </MainContainer>
    );
};

export default SelectProject;