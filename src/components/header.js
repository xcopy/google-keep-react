import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faRedo, faTh, faList} from '@fortawesome/free-solid-svg-icons';
import {Layouts, setLayout} from '../actions/layout-actions';
import {connect} from 'react-redux';

const Header = ({layout, setLayout}) => {
    const viewTitle = {
        [Layouts.GRID]: 'List view',
        [Layouts.LIST]: 'Grid view'
    }[layout];

    const viewIcon = {
        [Layouts.GRID]: faList,
        [Layouts.LIST]: faTh
    }[layout];

    return (
        <Navbar fixed="top" bg="light justify-content-between">
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
                <Nav.Link className="px-3" title={viewTitle} onClick={(e) => {
                    e.preventDefault();
                    setLayout(layout === Layouts.GRID ? Layouts.LIST : Layouts.GRID);
                }}>
                    <FontAwesomeIcon icon={viewIcon} size="lg"/>
                </Nav.Link>
                <Nav.Link className="px-3">
                    <FontAwesomeIcon icon={faCog} size="lg"/>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

const mapStateToProps = state => ({
    layout: state.layout
});

const mapDispatchToProps = {
    setLayout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
