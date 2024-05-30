import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/user1'>User 1</NavLink>
                <NavLink to='/user2'>User 2</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;