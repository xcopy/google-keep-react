import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArchive, faTrash} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import Truncate from 'react-truncate';
import './Note.scss';

class Note extends Component {
    render() {
        const {title, content, created_at} = this.props;

        return (
            <Card className="mb-3">
                <Card.Header>
                    <Moment fromNow className="small">{created_at}</Moment>
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
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-archive">Archive</Tooltip>}>
                        <Button variant="link" size="sm" className="text-secondary">
                            <FontAwesomeIcon icon={faArchive}/>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<Tooltip id="tooltip-delete">Delete</Tooltip>}>
                        <Button variant="link" size="sm" className="text-secondary">
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
    deleted_at: PropTypes.any
};

export default Note;
