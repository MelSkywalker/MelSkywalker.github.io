import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveThumbnail from './ActiveThumbnail';
import ThumbnailGrid from './ThumbnailGrid';
import ProjectDescription from './ProjectDescription';
import Projects from './projects.json';

const MainContainer = styled.div`
    background: #ddd;
    height: 500px;
    width: 1024px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 65%;
    background: gray;
`;

export default class Gallery extends Component {
    state = {
        projects: Projects.map( project => project ),
        activeIndex: 0
    }

    renderThumbnails = () => {
        const { projects, activeIndex } = this.state;
        if(projects.length) {
            return(
                <ActiveThumbnail
                    activeThumbnail={ projects[activeIndex]}
                ></ActiveThumbnail>
            )
        }
        return null
    }

    renderText = () => {
        const { projects, activeIndex } = this.state;
        if(projects.length) {
            return(
                <ProjectDescription
                    title={projects[activeIndex].title}
                    description={projects[activeIndex].description}
                    link={projects[activeIndex].link}
                    repository={projects[activeIndex].repository}
                    tools={projects[activeIndex].tools.map(tool => tool)}
                />
            )
        }
        return null
    }

    handleClick = (e) => {
        const newActiveIndex = e.target.getAttribute('data-index');
        this.setState({ activeIndex: newActiveIndex })
        
    }

    render() {
        const { projects } = this.state;
        return(
            <MainContainer>
                <Container>
                    { this.renderThumbnails() }
                    { this.renderText() }
                </Container>
                <ThumbnailGrid
                    projects={projects}
                    handleClick={this.handleClick}
                />
            </MainContainer>
        )
    }
}