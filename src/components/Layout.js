import React from 'react';
import NoteList from './NoteList';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faRedo, faTh, faList} from '@fortawesome/free-solid-svg-icons';

const DISPLAY_STYLE_GRID = 'grid';
const DISPLAY_STYLE_LIST = 'list';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayStyle: DISPLAY_STYLE_GRID
        };

        this.toggleDisplayStyle = this.toggleDisplayStyle.bind(this);
    }

    toggleDisplayStyle() {
        this.setState(state => ({
            displayStyle: state.displayStyle === DISPLAY_STYLE_GRID
                ? DISPLAY_STYLE_LIST
                : DISPLAY_STYLE_GRID
        }));
    }

    render() {
        let displayStyleIcon = this.state.displayStyle === DISPLAY_STYLE_GRID
            ? faList
            : faTh;

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
                        <Nav.Link className="px-3">
                            <FontAwesomeIcon icon={faRedo} size="lg"/>
                        </Nav.Link>
                        <Nav.Link className="px-3" onClick={this.toggleDisplayStyle}>
                            <FontAwesomeIcon icon={displayStyleIcon} size="lg"/>
                        </Nav.Link>
                        <Nav.Link className="px-3">
                            <FontAwesomeIcon icon={faCog} size="lg"/>
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Container>
                    <NoteList displayStyle={this.state.displayStyle}/>
                </Container>
            </div>
        );
    }
}

export default Layout;
