import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';
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
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
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
