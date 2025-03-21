import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const nav = <>
     <NavLink to='/'>Home</NavLink>
     <NavLink>Read</NavLink>
     <NavLink>Pages to view</NavLink>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Inkspire</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {nav}
                    </ul>
                </div>
                
                <div className="navbar-end gap-3">
                    <a className="btn">Sign up</a>
                    <a className="btn">Login</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;