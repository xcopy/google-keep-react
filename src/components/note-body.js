import React from 'react';
import {Card} from 'react-bootstrap';
import Truncate from 'react-truncate';

const NoteBody = ({title, content}) => {
    return (
        <Card.Body className="pt-0">
            <Card.Title>
                <Truncate lines={2}>{title}</Truncate>
            </Card.Title>
            <Card.Text>
                <Truncate lines={7}>{content}</Truncate>
            </Card.Text>
        </Card.Body>
    );
};

export default NoteBody;
