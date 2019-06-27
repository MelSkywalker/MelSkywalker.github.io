import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import style from './navigation.css';

const NavBar = styled.div`
    display: flex;
    flex-direction: raw;
    justify-content: flex-end;
    margin-right: 2em;
`;

const Navigation = () => {
    return(
        <NavBar>
            <NavLink to='/'className='NavLink' >Home</NavLink>
            <NavLink to='/portfolio'className='NavLink' >Portfolio</NavLink>
            <NavLink to='/about'className='NavLink' >Get to know me!</NavLink>
            <NavLink to='/contact'className='NavLink' >Let's chat!</NavLink>
        </NavBar>
    );
};

export default Navigation;