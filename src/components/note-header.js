import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button, Card} from 'react-bootstrap';

import Moment from 'react-moment';
import 'moment-timezone';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

const NoteHeader = ({created_at, isDeleted, isArchived, isPinned}) => {
    const isActive = !isDeleted && !isArchived;

    return (
        <Card.Header className="bg-white border-bottom-0">
            <Row noGutters>
                <Col>
                    <div className="d-flex align-items-center h-100">
                        <Moment fromNow className="small text-muted">{created_at}</Moment>
                    </div>
                </Col>
                <Col className="text-right">
                    {isActive && (
                        <Button variant="link" className="text-secondary p-0"
                            title={isPinned ? 'Unpin note' : 'Pin note'}>
                            <FontAwesomeIcon icon={isPinned ? faBookmarked : faBookmark}/>
                        </Button>
                    )}
                </Col>
            </Row>
        </Card.Header>
    );
};

NoteHeader.propTypes = {
    created_at: PropTypes.string.isRequired,
    isDeleted: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isPinned: PropTypes.bool.isRequired,
    // pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
