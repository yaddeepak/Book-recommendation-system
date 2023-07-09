import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
 
    const handleLogout = () => {
        document.cookie = "myCookie=" + "" + "; expires=" + "Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/";
        navigate('/login');
 
    };
    const navigate = useNavigate();
 
 
 
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                Book App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    {(!document.cookie) && <Nav.Link as={NavLink} to="/login" exact activeClassName="active">
                        Login
                    </Nav.Link>
                    }
                    {(!document.cookie) && <Nav.Link as={NavLink} to="/signup" exact activeClassName="active">
                        Signup
                    </Nav.Link>
                    }
                    {(document.cookie) && <Nav.Link
                        as={NavLink}
                        to="/login"
                        exact
                        activeClassName="active"
                        onClick={handleLogout}
                    >
                        Logout
                    </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default NavBar;
