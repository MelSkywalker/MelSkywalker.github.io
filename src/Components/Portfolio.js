import React, { Component } from "react";
import styled from "styled-components";
import { Close } from 'styled-icons/material/Close';
import { WindowClose } from 'styled-icons/fa-solid/WindowClose';
import { Play } from 'styled-icons/fa-solid/Play';

import Projects from "./newPortfolio/projects.json";
import Viewer from "./newPortfolio/Viewer";
import SelectProject from "./newPortfolio/SelectProject";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */

  margin: 5vh;
  height: 65vh;
  width: 70vw;
  position: relative;
  /* display: inline-block; */
  background-color: #548fdf;
  background-image: linear-gradient(#1b6ec3, #22e0eb);

  border-radius: 40px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;

  &:after {
    border-radius: 40px;
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 5%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
`;

const BgModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  /* display: none; */
`;

const ContentModal = styled.div`
  width: 50%;
  height: 60%;
  background-color: rgba(255,255,255,0);
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.iframe`
  width: 85%;
  height: 85%;
  display: block;
`;

const CloseButton = styled(WindowClose)`
  position: absolute;
  top: 0;
  right: 12px;
  color: #30CFD0;
`;

const OpenButton = styled.button`
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
`;

const PlayIcon = styled(Play)`
  color: #30CFD0;
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
    console.log('handle change');
    console.log(e.target.value);
  }

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
        <BgModal>
          <ContentModal>
            <CloseButton size='36' title='Close modal' />
            <Video title='Mel Quesada motion graphics demo reel' src='https://www.youtube.com/embed/UoGEM0D1xtU?autoplay=1' allowFullScreen></Video>
          </ContentModal>
        </BgModal>
        {this.renderActive()}
        <SelectProject projects={projects} handleChange={this.handleChange} />
        <OpenButton><PlayIcon size='36'/></OpenButton>
      </MainContainer>
    );
  }
}

// const Portfolio = ({title, description, link, repository, tools}) => {
//     return (
//         <MainContainer>
//             <Viewer/>
//             <SelectProject/>
//         </MainContainer>
//     );
// };

export default Portfolio;
