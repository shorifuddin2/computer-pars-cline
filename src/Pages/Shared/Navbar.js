import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import computer from '../../assets/images/parts-icon.jpg'
import Profile from '../../assets/icons/Profile.png'

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Parches">Parches</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        {
            user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <img className="w-10 mx-5 rounded-full min-w-[40px] h-10 min-h-[40px]" src={user ? user.photoURL : Profile} alt="Profile"/>
        <li>{user ? <button className="btn btn-ghost mr-0 bg-primary" onClick={logout} >Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
    </>
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-1/4' src={computer}/>
                <a className="btn btn-ghost normal-case text-xl "><span className='text-4xl text-primary'>C</span>P Parts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;