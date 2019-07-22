import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// const Menu = styled.ul`
//     /* opacity: 0; */
//     padding: 0;
//     width: 5%;
//     height: auto;
//     list-style: none;
//     margin: 10% 1%;
//     position: fixed;
//     z-index: 100;
//     background: linear-gradient( #30CFD0, #330867);
// `;

// const MenuItems = styled.li`
//     padding: 10%;
//     border: #fff ridge 5px;
//     border-bottom: white ridge 5px;
//     color: white;

//     &:hover{
//         background: linear-gradient(
//       rgba(239, 123, 206, 0.8),
//       rgba(149, 78, 210, 0.6)
//     );
//     }
// `;

// const StyledHome = styled(Home)`
//     color: white;
//     &:active {
//         color: white;
//         }
//     &:visited {
//         color: white;
//     }
//     &:hover {
//         color: white;
//     }
// `;
// const StyledImages = styled(Images)`
//     color: white;
//     &:active {
//         color: white;
//         }
//     &:visited {
//         color: white;
//     }
//     &:hover {
//         color: white;
//     }
// `;
// const StyledPerson = styled(Person)`
//     color: white;
//     &:active {
//         color: white;
//         }
//     &:visited {
//         color: white;
//     }
//     &:hover {
//         color: white;
//     }
// `;
// const StyledEnvelope = styled(Envelope)`
//     color: white;
//     &:active {
//         color: white;
//         }
//     &:visited {
//         color: white;
//     }
//     &:hover {
//         color: white;
//     }
// `;

const Menu = styled.ul`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100vw;
  margin: 0;
  padding: 1%;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  justify-content: space-between;
  z-index: 100;
`;

const NavigationLink = styled(NavLink)`
  &:active {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: white;
  }
`;

const MenuItems = styled.li`
  display: inline;
  color: white;
  margin-right: 1vw;
  margin-left: 1vw;
  box-sizing: border-box;
`;

const DivMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;

const Navigation = () => {
  return (
    <Menu>
      <MenuItems><NavigationLink to="/">Home</NavigationLink></MenuItems>
      <DivMenu>
        <MenuItems><NavigationLink to="/portfolio">Check out my work!</NavigationLink></MenuItems>
        <MenuItems><NavigationLink to="/contact">Let's talk!</NavigationLink></MenuItems>
      </DivMenu>
    </Menu>
  );
};

export default Navigation;
