import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faRedo} from '@fortawesome/free-solid-svg-icons';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light justify-content-between">
                    <Navbar.Brand href="#">
                        <div className="d-flex align-items-center">
                            <img src="/logo-40x40.png" width="40" height="40" alt=""/>
                            <h4 className="d-inline-block ml-2 my-0 text-muted">Keep</h4>
                        </div>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faRedo} size="lg"/>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <FontAwesomeIcon icon={faCog} size="lg"/>
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Container/>
            </div>
        );
    }
}

export default Layout;
