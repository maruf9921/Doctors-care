import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="300"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link className="text-info fw-bold fs-5" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-info fw-bold fs-5" as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link className="text-info fw-bold fs-5" as={Link} to="/aboutus">About Us</Nav.Link>
                    <Nav.Link className="text-info fw-bold fs-5" as={Link} to="/contactus">Contact Us</Nav.Link>
                    <span>{user.displayName}</span>
                    {user.email ? <button onClick={logout} type="button" className="btn btn-danger rounded-pill ms-4 fw-bold fs-5">Log Out</button> : <Nav.Link className="text-info fw-bold fs-5" as={Link} to="/login">Log In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;