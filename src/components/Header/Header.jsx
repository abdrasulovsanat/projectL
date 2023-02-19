import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">L</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/add')}>Add</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header