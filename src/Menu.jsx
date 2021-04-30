import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    // for setting the login and log out
    const [loginFlag, setLoginFlag] = useState('block');
    const [logoutFlag, setLogoutFlag] = useState('none');

    // for admin
    const [adminFlag, setAdminFlag] = useState('none');

    // for changing the menu
    useEffect(() => {

        const hasLogin = localStorage.getItem("hasLogin");

        setLoginFlag((hasLogin === "yes") ? "none" : "block");
        setLogoutFlag((hasLogin === "yes") ? "block" : "none");

        const isAdmin = localStorage.getItem("isAdmin");

        setAdminFlag((isAdmin === "true") ? "block" : "none");

    }, []);


    // for logout 
    const logout = (event) => {
        event.preventDefault();
        localStorage.clear();
        setLoginFlag('block');
        setLogoutFlag('none');
        setAdminFlag('none');
        window.location = "/";
    }


    return (
        <>

            <div className="navBar">

                <NavLink to='/'>
                    Home
            </NavLink>

                <div style={{ display: adminFlag }}>
                    <NavLink to='/addProject'>
                        Add Project
            </NavLink>
                </div>

                <div style={{ display: loginFlag }}>
                    <NavLink to='/login'>
                        Login
            </NavLink>

                    <NavLink to='/signup'>
                        Signup
            </NavLink>
                </div>

                <div style={{ display: (adminFlag === "block") ? "none" : "block" }}>
                    <NavLink to='/about'>
                        About us
            </NavLink>
                </div>

                <div style={{ display: logoutFlag }} role="button" onClick={logout}>
                    <NavLink to=''>
                        Logout
            </NavLink>
                </div>



            </div>

        </>
    );
};

export default Menu;