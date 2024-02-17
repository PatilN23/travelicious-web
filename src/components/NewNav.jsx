import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';


const NewNav = () => {
    return (
        <>
            <nav className="bg-white border-gray-200  dark:bg-slate-500">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <div className="flex items-center">
                        <NavLink to='/'><img src={logo} className='h-11 m-2' /></NavLink>
                    </div>

                    <div className="items-center justify-between  w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-20 lg:mt-0">
                            <li><NavLink to="/SignIn" className="nav-link block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sign-In</NavLink>
                            </li>
                            <li><NavLink to="/" className="nav-link block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white">Home</NavLink></li>
                            <li><NavLink to="/Destination" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Destination</NavLink>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default NewNav;