import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/portfolio' >Portfolio</NavLink>
            <NavLink to='/about' >Get to know me!</NavLink>
            <NavLink to='/contact' >Let's chat!</NavLink>
        </div>
    );
};

export default Navigation;