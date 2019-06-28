import React, { Component } from "react";
import styled from "styled-components";

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

class Portfolio extends Component {
  state = {
    projects: Projects.map(project => project),
    activeIndex: 0,
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

  render() {
    const { projects } = this.state;
    return (
      <MainContainer>
        {this.renderActive()}
        <SelectProject projects={projects} handleChange={this.handleChange} />
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
