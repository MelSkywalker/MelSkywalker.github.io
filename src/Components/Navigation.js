import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/portfolio' >Portfolio</NavLink>
            <NavLink to='/about' >About Me</NavLink>
            <NavLink to='/contact' >Contact Me</NavLink>
        </div>
    );
};

export default Navigation;