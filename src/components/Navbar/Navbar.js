import React from 'react';
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
    return (
        <nav className="flex justify-center space-x-4 bg-red-100">
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/reviews'}>Reviews</CustomLink>
            <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
            <CustomLink to={'/blogs'}>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </nav>
    );
};

export default Navbar;