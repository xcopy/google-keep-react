import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Note extends Component {
    render() {
        const {title, content} = this.props.note;

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

export default Note;
