import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button, Card} from 'react-bootstrap';

import Moment from 'react-moment';
import 'moment-timezone';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';

const NoteHeader = ({created_at}) => {
    return (
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
    );
};

NoteHeader.propTypes = {
    created_at: PropTypes.string.isRequired,
    // pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
