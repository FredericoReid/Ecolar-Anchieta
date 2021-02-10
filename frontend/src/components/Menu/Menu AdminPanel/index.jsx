import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../../assets/icons/icon.svg';

const MenuAdmin = () => {
    return ( 
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="/">
                        <img alt="Eco Lar Anchieta" src={logo} width="70" height="70" className="d-inline-block align-center" />{' '}
                        Eco Lar Anchieta
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/ResidentsAdmin">Moradores</Nav.Link>
                                <Nav.Link href="/VolunteerWorks">Trabalhos Voluntários</Nav.Link>
                                <Nav.Link href="/Quit">Sair</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
}

export default MenuAdmin;