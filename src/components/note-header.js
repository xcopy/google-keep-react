import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button, Card} from 'react-bootstrap';

import Moment from 'react-moment';
import 'moment-timezone';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faBookmark as faBookmarked} from '@fortawesome/free-solid-svg-icons';
import {faBookmark} from '@fortawesome/free-regular-svg-icons';

import {Filters} from '../actions/filter-actions';

const NoteHeader = ({created_at, filter}) => {
    return (
        <Card.Header className="bg-white border-bottom-0 pb-0 pt-2 px-2">
            <Row className="small text-muted" noGutters>
                <Col>
                    <Moment fromNow className="d-block mx-3 my-2">{created_at}</Moment>
                </Col>
                <Col className="text-right">
                    {filter === Filters.ACTIVE && (
                        <Button variant="link" className="text-secondary" title="Pin note">
                            <FontAwesomeIcon icon={faBookmark}/>
                        </Button>
                    )}
                </Col>
            </Row>
        </Card.Header>
    );
};

NoteHeader.propTypes = {
    created_at: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
    // pinNote: PropTypes.func.isRequired
};

export default NoteHeader;
