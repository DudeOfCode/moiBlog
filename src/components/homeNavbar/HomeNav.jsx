import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./homeNav.css"
import { Link, useLocation } from "react-router-dom";
const HomeNav = () => {
    return (

        <div className="App">
            <Navbar bg="dark" variant="dark"
                sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>

                    <a href="#home">
                        <img src="https://img.youtube.com/vi/-HEjsVkfjOk/0.jpg" width="40px" height="40px" />{' '}
                         P-App
                    </a>

                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Products">
                            <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                            <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                            <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                        <Link to="/register"><Nav.Link >Register</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <div className="content" >
                <a className="offset" id="about-us"></a>
                <h1>About Us</h1>
            </div>
            <div className="content" >
                <a className="offset" id="contact-us"></a>
                <h1>Contact Us</h1>
            </div>

        </div>

    )
}

export default HomeNav