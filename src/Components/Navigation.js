import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from 'styled-icons/fa-solid/Home';
import { Images } from 'styled-icons/fa-solid/Images';
import { Envelope } from 'styled-icons/fa-solid/Envelope';
import { Person } from 'styled-icons/material/Person';

const Menu = styled.ul`
    padding: 0;
    width: 5%;
    height: auto;
    list-style: none;
    margin: 10% 1%;
    position: fixed;
    z-index: 100;
    background: linear-gradient( #30CFD0, #330867);
`;

const MenuItems = styled.li`
    padding: 10%;
    border: #fff ridge 5px;
    border-bottom: white ridge 5px;
    color: white;

    &:hover{
        background: linear-gradient(
      rgba(239, 123, 206, 0.8),
      rgba(149, 78, 210, 0.6)
    );
    }
`;

const StyledHome = styled(Home)`
    color: white;
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
const StyledImages = styled(Images)`
    color: white;
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
const StyledPerson = styled(Person)`
    color: white;
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
const StyledEnvelope = styled(Envelope)`
    color: white;
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

const Navigation = () => {
    return(
            <Menu>
                <MenuItems><NavLink to='/'><StyledHome/></NavLink></MenuItems>
                <MenuItems><NavLink to='/portfolio'><StyledImages/></NavLink></MenuItems>
                <MenuItems><NavLink to='/about'><StyledPerson/></NavLink></MenuItems>
                <MenuItems><NavLink to='/contact'><StyledEnvelope/></NavLink></MenuItems>
            </Menu>
    );
};

export default Navigation;