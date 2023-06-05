//navbar de boostrap que contendra un link a home y otro a contact.

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    //navbar con background #dd3546 y texto blanco
    <Navbar style={{ backgroundColor: '#dd3546' }}>
      <Nav>
        <Link className="nav-link text-white" to="/">Home</Link>
        <Link className="nav-link text-white" to="/contact">Contact</Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarComponent;