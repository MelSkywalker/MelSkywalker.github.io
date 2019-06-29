import React from "react";
import styled from "styled-components";
import { DownArrow } from "styled-icons/boxicons-solid";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 10vh;
  width: 25vw;
  position: relative;
  background-color: #c23cc6;
  background-image: linear-gradient(#c23cc6, #de6ae6);

  border-top: #f0a0f9 groove 5px;
  border-right: #f0a0f9 groove 5px;
  border-bottom: #c23cc6 ridge 5px;
  border-left: #c23cc6 ridge 5px;
  border-radius: 50px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;

  &:after {
    border-radius: 50px;
    content: "";
    position: absolute;
    top: 0;
    left: 2px;
    right: 2px;
    width: calc(100% - 4px);
    height: 30%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
`;

const ProjectSelector = styled.select`
  display: inline-block;
  position: relative;
  cursor: pointer;

  height: 60%;
  width: 70%;
  box-sizing: content-box;
  background-color: white;
  border-radius: 20px;
  box-shadow: inset 0 8px 2px -6px #000;
  margin: 0;
  appearance: none;
  padding-left: 2em;
  border: lightgray ridge 2px;

  &:hover {
    background-color: #22e0eb;
  }
`;

const ArrowIcon = styled(DownArrow)`
  position: absolute;
  right: 15%;
  pointer-events: none;
  color: #e8d915;
  height: 3em;
  width: auto;
`;

const SelectProject = ({ projects, handleChange }) => {
  return (
    <MainContainer>
      <ProjectSelector
        onChange={handleChange}
      >
        <option value="" hidden>
          Select Project
        </option>
        {projects.map((project, i) => {
          return (
            <option
              key={project.title}
              value={i}
              data-index={i}
            >
              {project.title}
            </option>
          );
        })}
      </ProjectSelector>
      <ArrowIcon />
    </MainContainer>
  );
};

export default SelectProject;
