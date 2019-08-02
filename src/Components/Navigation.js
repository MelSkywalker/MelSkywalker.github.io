import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from './Device';

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
  font-weight: bolder;
  text-decoration: none;
  font-size: 18px;
  &:active {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:hover {
    color: #d4009f;
    border-bottom: 2px solid #d4009f;
  }
  @media ${device.mobile}{
    font-size: 14px;
  }
`;

const MenuItems = styled.li`
  display: inline;
  color: white;
  margin-right: 1vw;
  margin-left: 1vw;
  box-sizing: border-box;
  @media ${device.mobile}{
    &:nth-of-type(1){
      width: 30%;
    }
  }
`;

const DivMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  @media ${device.laptop} {
    width: 20%;
  }
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.mobile}{
    width: 60%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Navigation = () => {
  return (
    <Menu>
      <MenuItems><NavigationLink to="/">HOME</NavigationLink></MenuItems>
      <DivMenu>
        <MenuItems><NavigationLink to="/portfolio">CHECK OUT MY WORK!</NavigationLink></MenuItems>
        <MenuItems><NavigationLink to="/contact">LET'S TALK!</NavigationLink></MenuItems>
      </DivMenu>
    </Menu>
  );
};

export default Navigation;
