import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Card} from 'react-bootstrap';
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
                <Card.Header className="bg-white border-bottom-0 pb-0">
                    <Row className="small text-muted">
                        <Col>
                            <Moment fromNow>{created_at}</Moment>
                        </Col>
                        <Col className="text-right">
                            <Button variant="link" size="sm" className="text-secondary" title="Pin note">
                                <FontAwesomeIcon icon={faBookmark}/>
                            </Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <Truncate lines={2}>{title}</Truncate>
                    </Card.Title>
                    <Card.Text>
                        <Truncate lines={7}>{content}</Truncate>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                    <Button variant="link" size="sm" className="text-secondary" title="Archive"
                        onClick={() => archiveNote(id)}>
                        <FontAwesomeIcon icon={faArchive}/>
                    </Button>
                    <Button variant="link" size="sm" className="text-secondary" title="Delete"
                        onClick={() => deleteNote(id)}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </Button>
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
    archived_at: PropTypes.any,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired
};

export default Note;
