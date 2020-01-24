import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faRedo, faTh} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="light justify-content-between">
            <Navbar.Brand href="#">
                <div className="d-flex align-items-center">
                    <img src="/logo-40x40.png" width="40" height="40" alt=""/>
                    <h4 className="d-inline-block ml-2 my-0 text-muted">Keep</h4>
                </div>
            </Navbar.Brand>
            <Nav>
                <Nav.Link className="px-3">
                    <FontAwesomeIcon icon={faRedo} size="lg"/>
                </Nav.Link>
                <Nav.Link className="px-3">
                    <FontAwesomeIcon icon={faTh} size="lg"/>
                </Nav.Link>
                <Nav.Link className="px-3">
                    <FontAwesomeIcon icon={faCog} size="lg"/>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
