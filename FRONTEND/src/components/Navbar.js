import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
 
const NavBar = () => {
 
    const handleLogout = () => {
        document.cookie = "myCookie=" + null;
    };
   
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                Book App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/login" exact activeClassName="active" >
                        Login
                    </Nav.Link>
                    
                    <Nav.Link as={NavLink} to="/signup" exact activeClassName="active">
                        Signup
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/login"
                        exact
                        activeClassName="active"
                        onClick={handleLogout}
                    >
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
 
export default NavBar;