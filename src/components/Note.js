import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Card, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark, faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import Truncate from 'react-truncate';
import './Note.scss';

class Note extends Component {
    render() {
        const {
            id, title, content, created_at,
            deleteNote, archiveNote
        } = this.props;

        return (
            <Card className="mb-3">
                <Card.Body>
                    <div className="mb-2 small text-muted">
                        <Row>
                            <Col>
                                <Moment fromNow>{created_at}</Moment>
                            </Col>
                            <Col className="text-right">
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip id="tooltip-pin">Pin note</Tooltip>}>
                                    <Button variant="link" size="sm" className="text-secondary">
                                        <FontAwesomeIcon icon={faBookmark}/>
                                    </Button>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    </div>
                    <Card.Title>
                        <Truncate lines={2}>{title}</Truncate>
                    </Card.Title>
                    <Card.Text>
                        <Truncate lines={7}>{content}</Truncate>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-archive">Archive</Tooltip>}>
                        <Button variant="link" size="sm" className="text-secondary"
                            onClick={() => archiveNote(id)}>
                            <FontAwesomeIcon icon={faArchive}/>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-delete">Delete</Tooltip>}>
                        <Button variant="link" size="sm" className="text-secondary"
                            onClick={() => deleteNote(id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </OverlayTrigger>
                </Card.Footer>
            </Card>
        );
    }
}

Note.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    deleted_at: PropTypes.any,
    archived_at: PropTypes.any
};

export default Note;
