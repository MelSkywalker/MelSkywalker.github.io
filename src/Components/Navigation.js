import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  align-items: center;
  z-index: 100;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
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
      <MenuItems><NavigationLink to="/">HOME</NavigationLink></MenuItems>
      <DivMenu>
        <MenuItems><NavigationLink to="/portfolio">Check out my work!</NavigationLink></MenuItems>
        <MenuItems><NavigationLink to="/contact">Let's talk!</NavigationLink></MenuItems>
      </DivMenu>
    </Menu>
  );
};

export default Navigation;
