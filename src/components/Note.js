import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import './Note.scss';

class Note extends Component {
    render() {
        const {title, content} = this.props;

        return (
            <Card className="mb-3">
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
    created_at: PropTypes.instanceOf(Date).isRequired,
    deleted_at: PropTypes.any
};

export default Note;
