import React, { Component } from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import { WindowClose } from 'styled-icons/fa-solid/WindowClose';
import { Play } from 'styled-icons/fa-solid/Play';

import Projects from "./newPortfolio/projects.json";
import Viewer from "./newPortfolio/Viewer";
import SelectProject from "./newPortfolio/SelectProject";

Modal.setAppElement('#root');

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledModal = styled(Modal)`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Video = styled.iframe`
  width: 50%;
  height: 50%;
  display: block;
`;

const CloseButton = styled(WindowClose)`
  position: absolute;
  top: 23vh;
  right: 23vw;
  color: #30CFD0;
  cursor: pointer;
`;

const OpenButton = styled.button`
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  cursor: pointer;
`;

const PlayIcon = styled(Play)`
  color: #30CFD0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 2vh;
`;

const PlayP = styled.p`
  margin: 0 1vh;
`;

class Portfolio extends Component {
  state = {
    projects: Projects.map(project => project),
    activeIndex: 0,
    isOpen: false,
  };

  renderActive = () => {
    const { projects, activeIndex } = this.state;
    if (projects.length) {
      return (
        <Viewer
          title={projects[activeIndex].title}
          description={projects[activeIndex].description}
          link={projects[activeIndex].link}
          repository={projects[activeIndex].repository}
          logo={projects[activeIndex].logo}
          tools={projects[activeIndex].tools}
          picture={projects[activeIndex].picture}
        />
      );
    }
    return null;
  };

  handleChange = e => {
      const newActiveIndex = e.target.value;
      this.setState({ activeIndex: newActiveIndex });
  };

  handleClick = e => {
    const newActiveIndex = e.target.getAttribute("data-index");
    this.setState({ activeIndex: newActiveIndex });
  };

  openModal = () => {
    this.setState({isOpen: true});
  };

  closeModal = () => {
    this.setState({isOpen: false})
  };

  render() {
    const { projects } = this.state;
    return (
      <MainContainer>
        <StyledModal isOpen={this.state.isOpen} onRequestClose={()=>this.closeModal()}>
          <Video title='Mel Quesada motion graphics demo reel' src='https://www.youtube.com/embed/UoGEM0D1xtU?autoplay=1' allowFullScreen></Video>
          <CloseButton size='36' title='Close modal' onClick={(e)=>this.closeModal(e)}/>
        </StyledModal>
        {this.renderActive()}
        <ButtonsContainer>
        <SelectProject projects={projects} handleChange={this.handleChange} />
        <PlayContainer>
          <OpenButton onClick={(e)=>this.openModal(e)} title='Motion Graphics Demo Reel'><PlayIcon size='36'/></OpenButton>
          <PlayP>Play MoGraph Reel</PlayP>
        </PlayContainer>
        </ButtonsContainer>
      </MainContainer>
    );
  }
}

export default Portfolio;
