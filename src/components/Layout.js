import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#">
                        <div className="d-flex align-items-center">
                            <img src="/logo-40x40.png" width="40" height="40" alt=""/>
                            <h4 className="d-inline-block ml-2 my-0 text-muted">Keep</h4>
                        </div>
                    </Navbar.Brand>
                </Navbar>
                <Container/>
            </div>
        );
    }
}

export default Layout;
