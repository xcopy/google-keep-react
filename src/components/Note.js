import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
import './Note.scss';

class Note extends Component {
    render() {
        const {title, content} = this.props;

        return (
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{content}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

Note.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default Note;
